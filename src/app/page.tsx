import ToolCard from "@/components/ui/ToolCard";
import { Stack, Paper, Flex, Text } from "@mantine/core";

export default function Page() {
  return (
    <Stack>
      <Text size="xl">Welcome to Cornucopia.</Text>
      <Paper>
        <Flex gap="lg" wrap="wrap">
          <ToolCard
            title="Quantum Speedup"
            description="Learn just how fast quantum computers can be."
            href="/grover"
          />
        </Flex>
      </Paper>
    </Stack>
  );
}
