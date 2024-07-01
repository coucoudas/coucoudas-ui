import { cn } from "../../util";

export default function Test() {
  const container = {
    displays: "flex",
    styles: "border-4 border-blue-500",
  };
  return <div className={cn(container)}>Test</div>;
}
