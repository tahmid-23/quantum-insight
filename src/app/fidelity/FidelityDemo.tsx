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
        Stability:{" "}
        <span style={{ color: `rgb(${red}, ${green}, 0)` }}>
          {100 * fidelity}%
        </span>
      </Text>
      <div>
        <Text>Number of Qubits</Text>
        <Text size="xs">
          <i>The largest working modern quantum computer has 433 qubits.</i>
        </Text>
      </div>
      <Slider
        className="w-36"
        min={1}
        max={433}
        marks={[
          { value: 1, label: "1" },
          { value: 433, label: "433" },
        ]}
        value={qubitCount}
        onChange={setQubitCount}
      />
      <Text>Circuit Depth</Text>
      <Slider
        className="w-36"
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
