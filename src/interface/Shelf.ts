import { Titles } from "./Property";
import { ActionProps } from "./Action";
import { ButtonWidgetProps } from "./widget/Button";

interface Option<T> {
  titleSize?: string;
  subtitleSize?: string;
  overflowScroll?: boolean;
  width?: T;
  height?: number;
  gap?: "xy" | "x" | "y" | "none";
  isSize?: boolean;
}
export interface ShelfProps<T> {
  children: React.ReactNode;
  action?: ActionProps & { tabs?: ButtonWidgetProps[] };
  titles?: Titles;
  className?: string;
  option?: Option<T>;
}
