import * as React from 'react';
import { EnumData } from "./common";
import List from "./List";
import Select from "./Select";
import Radio from "./Radio";

export interface DictionaryProps {
  data: EnumData[];
  value?: any;
  defaultName?: any;
  type?: "text" | "tag" | "badge";
  optionName?: string,
  [key: string]: any
}

declare class Dictionary extends React.Component<DictionaryProps> {
  static Select: typeof Select;
  static List: typeof List;
  static Radio: typeof Radio;
}

export default Dictionary;