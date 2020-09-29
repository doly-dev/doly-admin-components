import * as React from 'react';
import { SelectProps as AntdSelectProps, SelectValue } from "antd/es/select";
import { EnumData } from "./common";

interface ExtendSelectProps extends AntdSelectProps<SelectValue> {
  data: EnumData[];
  value?: any;
  excludeValues?: any[];
  all?: boolean;
  allValue?: any;
  allName?: any;
}

export { ExtendSelectProps as SelectProps };

declare const Select: React.FC<ExtendSelectProps>;

export default Select;