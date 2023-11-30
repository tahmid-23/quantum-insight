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
        <ProgressChart
          data={[
            { x: 2019, y: 27 },
            { x: 2020, y: 65 },
            { x: 2021, y: 127 },
            { x: 2022, y: 433 },
            { x: 2023, y: 1_121 },
          ]}
          labels={[2019, 2020, 2021, 2022, 2023]}
          title="Number of Qubits in IBM Computers"
          yTitle="# of Qubits"
        />
        <Text>
          However, quantum computing&apos;s &quot;biggest&quot; hope,
          Shor&apos;s algorithm, hasn&apos;t shown much progress.
        </Text>
        <ProgressChart
          data={[15, 21, 21]}
          labels={[2001, 2012, 2023]}
          title="Largest Number Factored by Shor's Algorithm"
          yTitle="Number"
        />
      </Stack>
    </ToolBase>
  );
}
