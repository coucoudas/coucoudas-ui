import SVG from "../../asset/SVG";
import { CheckBoxWidgetProps } from "../../interface";
import { cn } from "../../util";

export default function CheckBox({ state, title }: CheckBoxWidgetProps) {
  const [value, setValue] = state;
  const body = {
    displays: "flex justify-center items-center",
    sizes: "w-4 h-4",
    backgrounds: value ? "bg-blue-500" : "border-2 border-[#E2E8F0] ",
    boundaries: "rounded-[2px]",
  };
  return (
    <div className="flex items-center gap-x-2">
      <button onClick={() => setValue(!value)} className={cn(body)}>
        {value && <SVG.Check />}
      </button>
      {title && <div className="text-[14px]">{title}</div>}
    </div>
  );
}
