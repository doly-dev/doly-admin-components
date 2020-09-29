import * as React from 'react';
import { RadioGroupProps } from "antd/es/radio/interface";
import { SelectProps as AntdSelectProps, SelectValue } from "antd/es/select";

export interface EnumData {
  name: string;
  value: any;
  badge?: {
    status?: string;
    color?: string;
    [key: string]: any;
  },
  tag?: {
    color?: string;
    [key: string]: any;
  },
  text?: {
    color?: string;
    [key: string]: any;
  },
  [key: string]: any;
}

export interface DictionaryProps {
  data: EnumData[];
  value?: any;
  defaultName?: any;
  type?: "text" | "tag" | "badge";
  optionName?: string,
  [key: string]: any
}

interface ExtendSelectProps extends AntdSelectProps<SelectValue> {
  data: EnumData[];
  value?: any;
  excludeValues?: any[];
  all?: boolean;
  allValue?: any;
  allName?: any;
}

export { ExtendSelectProps as SelectProps };

export interface RadioProps extends RadioGroupProps {
  data: EnumData[];
  value?: any;
  type?: "default" | "button"
}

export interface ListProps extends DictionaryProps {
  value?: any[];
  size?: "small" | "middle" | "large";
  align?: "start" | "end" | "center" | "baseline";
  direction?: "vertical" | "horizontal";
  defaultValue?: any;
}


declare const Select: React.FC<ExtendSelectProps>;
declare const List: React.FC<ListProps>;
declare const Radio: React.FC<RadioProps>;

declare class Dictionary extends React.Component<DictionaryProps> {
  static Select: typeof Select;
  static List: typeof List;
  static Radio: typeof Radio;
}

export default Dictionary;