import { Stack, Title } from "@mantine/core";
import { PropsWithChildren } from "react";

export interface ToolBaseProps {
  title: string;
}

export default function ToolBase({
  title,
  children,
}: PropsWithChildren<ToolBaseProps>) {
  return (
    <Stack gap="lg">
      <Title order={1}>{title}</Title>
      {children}
    </Stack>
  );
}
