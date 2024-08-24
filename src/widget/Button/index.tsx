import { ButtonWidgetProps } from "../../interface";
import { cn } from "../../util";

export default function Button({ title, onClick, option }: ButtonWidgetProps) {
  const { width, height, background, text, boundaries, className } =
    option ?? {};
  const container = {
    width: width ?? "w-[335px]",
    height: height ?? "h-12",
    backgrounds: background ?? "bg-gray-black",
    texts: text ?? "text-white",
    boundaries: boundaries ?? "rounded-[6px]",
    className,
  };
  return (
    <button onClick={onClick} className={cn(container)}>
      {title}
    </button>
  );
}
