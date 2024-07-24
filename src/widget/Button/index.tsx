import { ButtonWidgetProps } from "../../interface";
import { cn } from "../../util";

export default function Button({ title, onClick, option }: ButtonWidgetProps) {
  const { width, className } = option ?? {};
  const container = {
    sizes: `${width ?? "w-[335px]"} h-12`,
    backgrounds: "bg-gray-black",
    texts: "text-white",
    boundaries: "rounded-[6px]",
    className,
  };
  return (
    <button onClick={onClick} className={cn(container)}>
      {title}
    </button>
  );
}
