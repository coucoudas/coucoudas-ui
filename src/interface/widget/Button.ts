import { OnClick } from "../Property";

interface ButtonWidgetProps {
  title: string;
  onClick: OnClick;
  option?: {
    width?: string;
    className?: string;
  };
}

export type { ButtonWidgetProps };
