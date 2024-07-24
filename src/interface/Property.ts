import { Dispatch, SetStateAction } from "react";

export type StateAction<T> = Dispatch<SetStateAction<T>>;
export type State<T> = [T, StateAction<T>];

export type Click<REQ = unknown, RES = any> = (prop?: REQ) => RES;
export type OnClick<Request = unknown, Response = unknown> = (
  prop?: Request
) => Response | ((prop?: Request) => Promise<Response>);

export type Titles = {
  title: string;
  subtitle?: string | string[];
  isSub?: boolean;
  color?: string;
  titleColor?: string;
  subtitleColor?: string;
};

export type Condition = boolean | ((value: string) => boolean);
