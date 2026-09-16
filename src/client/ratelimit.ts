export function createRatelimitedFetch(counts: number, secs: number): typeof fetch {
  let reqs = 0;
  let reset_resolvers = Promise.withResolvers<void>();

  setInterval(() => {
    reqs = 0;
    reset_resolvers.resolve();
    reset_resolvers = Promise.withResolvers();
  }, secs * 1000)

  const limited_fetch = (...args: Parameters<typeof fetch>): ReturnType<typeof fetch> => {
    if (reqs++ < counts) {
      return fetch(...args);
    } else {
      return reset_resolvers.promise.then(() => limited_fetch(...args));
    }
  };

  //@ts-ignore
  limited_fetch.preconnect = fetch.preconnect;

  return limited_fetch as typeof fetch;
}
