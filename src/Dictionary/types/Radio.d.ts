import * as React from 'react';
import { RadioGroupProps } from "antd/es/radio/interface";
import { EnumData } from "./common";

export interface RadioProps extends RadioGroupProps {
  data: EnumData[];
  value?: any;
  type?: "default" | "button"
}

declare const Select: React.FC<RadioProps>;

export default Select;