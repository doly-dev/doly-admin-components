import * as React from 'react';
import { CascaderProps, CascaderOptionType } from "antd/es/cascader";
import { InputProps } from "antd/es/input";
import { FormInstance } from "antd/es/form";

type ValueType = [string[], any];

export interface CascaderWithInputProps {
  options: CascaderOptionType[];
  value?: ValueType;
  onChange?: (value: ValueType) => void;
  cascaderProps?: CascaderProps | any;
  inputProps?: InputProps | any;
  form?: FormInstance;
  id?: string;
  onBlur?: any;
}

declare const CascaderWithInput: React.FC<CascaderWithInputProps>;

export default CascaderWithInput;