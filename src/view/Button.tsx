import { Box, Text, useInput } from "ink";

export function Button({ char, onClick }: { char: string; onClick(): void }) {
  useInput((input, key) => {
    if (key.meta && input === char) {
      onClick();
    }
  });

  return (
    <Box>
      <Text>(</Text>
      <Text underline>{char.toUpperCase()}</Text>
      <Text>)</Text>
    </Box>
  );
}
