"use client";

import { Button, Group, Text } from "@mantine/core";
import NumberGrid from "./NumberGrid";
import { Property } from "csstype";
import { useCallback, useRef, useState } from "react";

function generateNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function useNumbers(): [number[][], number] {
  const initialNumbers = [];
  for (let i = 0; i < 5; ++i) {
    const newRow = [];
    for (let j = 0; j < 5; ++j) {
      newRow.push(generateNumber(1, 100));
    }

    initialNumbers.push(newRow);
  }

  const targetNumber = useRef<number>(
    initialNumbers[generateNumber(0, 4)][generateNumber(0, 4)],
  );
  const numbers = useRef<number[][]>(initialNumbers);

  return [numbers.current, targetNumber.current];
}

function useTimer(
  action: (time: number) => boolean,
): [string, number, () => void] {
  const actionRef = useRef(action);
  const [time, setTime] = useState(0);
  const interval = useRef<number>();

  if (actionRef.current !== action) {
    actionRef.current = action;
  }

  const startTimer = () => {
    if (interval.current) {
      window.clearInterval(interval.current);
    }

    setTime(0);
    interval.current = window.setInterval(() => {
      setTime((oldTime) => {
        if (actionRef.current(oldTime)) {
          window.clearInterval(interval.current);
          interval.current = undefined;
          return oldTime;
        }

        return oldTime + 1;
      });
    }, 100);
  };

  return [`${time / 10}s`, time, startTimer];
}

export default function ComparisonDemo() {
  const [numbers, targetNumber] = useNumbers();
  const [[classicalRow, classicalCol], setClassicalPos] = useState<
    [number, number]
  >([-1, -1]);
  const classicalTimerCallback = useCallback(
    (time: number) => {
      if (time === 0) {
        setClassicalPos([0, 0]);
        return false;
      }

      if (time % 10 === 0) {
        if (classicalCol === 4) {
          setClassicalPos([classicalRow + 1, 0]);

          if (numbers[classicalRow][classicalCol] === targetNumber) {
            return true;
          }
        } else {
          setClassicalPos([classicalRow, classicalCol + 1]);

          if (numbers[classicalRow][classicalCol] === targetNumber) {
            return true;
          }
        }
      }

      if (classicalRow < 0 && classicalCol < 0) {
        return false;
      }

      if (classicalCol === 0) {
        if (classicalRow === 0) {
          return false;
        }

        return numbers[classicalRow - 1][4] === targetNumber;
      }

      return numbers[classicalRow][classicalCol - 1] === targetNumber;
    },
    [classicalCol, classicalRow, numbers, targetNumber],
  );
  const [classicalTimeString, , startClassicalTimer] = useTimer(
    classicalTimerCallback,
  );
  const [quantumTimeString, quantumTicks, startQuantumTimer] = useTimer(
    (time) => time === 50,
  );

  const classicalNumbers: [number, Property.BackgroundColor | undefined][][] =
    numbers.map((row, rowIndex) =>
      row.map((entry, columnIndex) => {
        if (
          rowIndex < classicalRow ||
          (rowIndex === classicalRow && columnIndex < classicalCol)
        ) {
          return [entry, entry === targetNumber ? "green" : "red"];
        }

        if (rowIndex === classicalRow && columnIndex === classicalCol) {
          if (classicalCol === 0) {
            if (classicalRow === 0) {
              return [entry, "gray"];
            }

            return [
              entry,
              numbers[classicalRow - 1][4] === targetNumber
                ? "undefined"
                : "gray",
            ];
          }

          return [
            entry,
            numbers[classicalRow][classicalCol - 1] === targetNumber
              ? "undefined"
              : "gray",
          ];
        }

        return [entry, undefined];
      }),
    );
  const quantumNumbers: [number, Property.BackgroundColor | undefined][][] =
    numbers.map((row) =>
      row.map((entry) => {
        if (quantumTicks === 0) {
          return [entry, undefined];
        }

        if (quantumTicks === 50) {
          return [entry, entry === targetNumber ? "green" : "red"];
        }

        return [entry, "gray"];
      }),
    );

  return (
    <>
      <Text size="lg">Find the number {targetNumber}.</Text>
      <Group gap={100}>
        <div>
          <Text size="xl">Classical Algorithm</Text>
          <Text>Time: {classicalTimeString}</Text>
          <NumberGrid numbers={classicalNumbers} />
        </div>
        <div>
          <Text size="xl">Quantum Algorithm</Text>
          <Text>Time: {quantumTimeString}</Text>
          <NumberGrid numbers={quantumNumbers} />
        </div>
      </Group>
      <Button
        onClick={() => {
          setClassicalPos([-1, -1]);
          startClassicalTimer();
          startQuantumTimer();
        }}
        className="w-fit"
      >
        Run
      </Button>
    </>
  );
}
