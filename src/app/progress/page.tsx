import ToolBase from "@/components/tool/ToolBase";
import ProgressChart from "./ProgressChart";
import { Stack, Text } from "@mantine/core";

export default function Page() {
  return (
    <ToolBase title="Quantum Progress">
      <Stack>
        <Text size="lg">
          Within the past few years, the number of qubits in quantum computers
          has been rapidly growing.
        </Text>
        <ProgressChart />
      </Stack>
    </ToolBase>
  );
}
