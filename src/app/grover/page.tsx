import ToolBase from "@/components/tool/ToolBase";
import dynamic from "next/dynamic";

const ComparisonDemo = dynamic(() => import("./ComparisonDemo"), {
  ssr: false,
});

export default function Page() {
  return (
    <ToolBase title="Quantum Speedup">
      <ComparisonDemo />
    </ToolBase>
  );
}
