import { Condition, State, Titles } from "../Property";

interface InputWidgetProps {
  title?: string;
  state: State<string | undefined>;
  isValid?: Condition;
  type?: "text" | "password";
  notifications?: [Condition, Titles][];
  placeholder?: string;
}

export type { InputWidgetProps };
