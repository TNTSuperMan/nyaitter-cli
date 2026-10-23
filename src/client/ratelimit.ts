export function createRatelimitedFetch(counts: number, secs: number) {
  let reqs = 0;
  let reset_resolvers = Promise.withResolvers<void>();
  const event_handlers = new Set<() => void>();

  setInterval(() => {
    reqs = 0;
    reset_resolvers.resolve();
    reset_resolvers = Promise.withResolvers();
    event_handlers.forEach((fn) => fn());
  }, secs * 1000);

  const limited_fetch = (
    ...args: Parameters<typeof fetch>
  ): ReturnType<typeof fetch> => {
    if (reqs++ < counts) {
      return fetch(...args);
    } else {
      event_handlers.forEach((fn) => fn());
      return reset_resolvers.promise.then(() => limited_fetch(...args));
    }
  };

  //@ts-ignore
  limited_fetch.preconnect = fetch.preconnect;

  return [
    limited_fetch as typeof fetch,
    {
      subscribe(fn: () => void): () => void {
        event_handlers.add(fn);
        return () => event_handlers.delete(fn);
      },
      getSnapshot: () => reqs >= counts,
    },
  ] as const;
}
