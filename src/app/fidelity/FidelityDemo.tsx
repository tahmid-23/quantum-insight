"use client";

import { Slider, Stack, Text } from "@mantine/core";
import { useState } from "react";

export default function FidelityDemo() {
  const [qubitCount, setQubitCount] = useState(1);
  const [circuitDepth, setCircuitDepth] = useState(1);
  const errorRate = 0.01;

  const fidelity = Math.pow(1 - errorRate, qubitCount * circuitDepth);
  const red = (1 - fidelity) * 255;
  const green = fidelity * 255;

  return (
    <Stack className="w-fit">
      <Text size="xl">
        Fidelity:{" "}
        <span style={{ color: `rgb(${red}, ${green}, 0)` }}>{fidelity}</span>
      </Text>
      <Text>Number of Qubits</Text>
      <Slider
        className="w-36"
        min={1}
        max={1000}
        marks={[
          { value: 1, label: "1" },
          { value: 1000, label: "1000" },
        ]}
        value={qubitCount}
        onChange={setQubitCount}
      />
      <Text>Circuit Depth</Text>
      <Slider
        className="w-36"
        label="Circuit Depth"
        min={1}
        max={10}
        marks={[
          { value: 1, label: "1" },
          { value: 10, label: "10" },
        ]}
        value={circuitDepth}
        onChange={setCircuitDepth}
      />
    </Stack>
  );
}
