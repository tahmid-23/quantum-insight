import { Title } from "@mantine/core";
import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className="h-28 px-8 flex items-center"
      style={{ backgroundColor: "var(--mantine-primary-color-filled)" }}
    >
      <Title className="text-5xl">
        <Link className="text-inherit no-underline" href="/">
          Quantum Insight
        </Link>
      </Title>
    </div>
  );
}
