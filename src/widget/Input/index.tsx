import { InputWidgetProps } from "../../interface";
import { cn } from "../../util";

export default function Input({
  title,
  state,
  notifications,
  isValid,
  type,
  placeholder = "입력해주세요.",
}: InputWidgetProps) {
  const [value, setValue] = state;
  const borderColor = (): string => {
    const red = "border-2 border-red-500";
    const gray = "border-1";
    if (typeof isValid === "function") {
      if (isValid(value ?? "") === false) return red;
      return gray;
    }
    if (isValid === false) return red;
    return gray;
  };
  const body = {
    sizes: "w-[335px] h-12",
    boundaries: "rounded-[6px] pl-4 mt-2",
    styles: "focus:outline-none",
    border: borderColor(),
  };
  const container = {
    displays: "flex flex-col",
  };
  const titleBox = {
    texts: "text-[14px]",
  };
  const notificationBox = (titleColor?: string) => ({
    texts: "text-[14px] leading-none",
    boundaries: "mt-2",
    styles: titleColor ?? "text-gray-500",
  });
  return (
    <div className={cn(container)}>
      {title && <div className={cn(titleBox)}>{title}</div>}
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className={cn(body)}
        type={type}
      />
      {notifications?.map(([condition, { title, titleColor }]) => {
        const isCondition =
          typeof condition === "function" ? condition(value ?? "") : condition;
        if (isCondition)
          return (
            <div key={title} className={cn(notificationBox(titleColor))}>
              {title}
            </div>
          );
      })}
    </div>
  );
}
