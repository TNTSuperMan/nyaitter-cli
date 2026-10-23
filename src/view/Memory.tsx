import { useEffect, useState } from "react";
import { Text } from "ink";

export function MemoryView() {
  const [mem, setMem] = useState(0);
  useEffect(() => {
    const int = setInterval(() => {
      setMem(process.memoryUsage().rss / 1048576);
    }, 1000);
    return () => clearInterval(int);
  }, []);

  return <Text>Memory usage: {mem}MB</Text>;
}
