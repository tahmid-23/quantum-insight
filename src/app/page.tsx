import ToolCard from "@/components/ui/ToolCard";
import { Stack, Paper, Flex, Text } from "@mantine/core";

export default function Page() {
  return (
    <Stack>
      <Text size="xl">
        See for yourself how quantum computers are just <em>superior</em>.
      </Text>
      <Paper>
        <Flex gap="lg" wrap="wrap">
          <ToolCard
            title="Quantum Speedup"
            description="Learn just how fast quantum computers can be."
            href="/grover"
          />
          <ToolCard
            title="Quantum Progress"
            description="How quickly is quantum development moving?"
            href="/progress"
          />
          <ToolCard
            title="Circuit Fidelity"
            description="How quickly do quantum computers become unstable?"
            href="/fidelity"
          />
        </Flex>
      </Paper>
    </Stack>
  );
}
