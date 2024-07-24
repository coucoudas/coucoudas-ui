import { ReactNode } from "react";
import { ShowAction } from "./Action";
import { Titles } from "./Property";

interface Option {
  className?: string;
  width: string;
  height: string;
  padding: boolean;
  position: string;
  noClose: boolean;
  noBackground: boolean;
  isShadow: boolean;
}

interface ModalProps {
  titles: Titles;
  children: ReactNode;
  showAction?: ShowAction;
  option?: Partial<Option>;
}

export type { ModalProps };
