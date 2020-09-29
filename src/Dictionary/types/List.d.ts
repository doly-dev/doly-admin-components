import * as React from 'react';
import { DictionaryProps } from "./Dictionary";

export interface ListProps extends DictionaryProps {
  value?: any[];
  size?: "small" | "middle" | "large";
  align?: "start" | "end" | "center" | "baseline";
  direction?: "vertical" | "horizontal";
  defaultValue?: any;
}

declare const List: React.FC<ListProps>;

export default List;