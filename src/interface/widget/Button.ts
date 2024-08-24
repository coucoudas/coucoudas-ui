import { OnClick } from "../Property";

interface ButtonWidgetProps {
  title: string;
  onClick: OnClick;
  option?: {
    width?: string;
    height?: string;
    background?: string;
    boundaries?: string;
    text?: string;
    className?: string;
  };
}

export type { ButtonWidgetProps };
