import { InputWidgetProps } from "../../interface";
import { cn } from "../../util";

export default function Input({
  title,
  state,
  placeholder = "입력해주세요.",
}: InputWidgetProps) {
  const [value, setValue] = state;
  const body = {
    sizes: "w-[335px] h-12",
    boundaries: "border-1 rounded-[6px] pl-4",
    styles: "focus:outline-none",
  };
  const container = {
    displays: "flex flex-col gap-y-2",
  };
  const titleBox = {
    texts: "text-[14px]",
  };
  return (
    <div className={cn(container)}>
      {title && <div className={cn(titleBox)}>{title}</div>}
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className={cn(body)}
      />
    </div>
  );
}
