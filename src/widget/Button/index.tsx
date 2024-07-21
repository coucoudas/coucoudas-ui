import { OnClick } from "../../interface";
import { cn } from "../../util";

interface ButtonWidgetProps {
  title: string;
  onClick: OnClick;
}
export default function Button({ title, onClick }: ButtonWidgetProps) {
  const container = {
    sizes: "w-[335px] h-12",
    backgrounds: "bg-black",
    texts: "text-white",
    boundaries: "rounded-[6px]",
  };
  return (
    <button onClick={onClick} className={cn(container)}>
      {title}
    </button>
  );
}
