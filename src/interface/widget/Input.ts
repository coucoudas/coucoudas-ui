import { State } from "../Property";

interface InputWidgetProps {
  title?: string;
  state: State<string | undefined>;
  placeholder?: string;
}

export type { InputWidgetProps };
