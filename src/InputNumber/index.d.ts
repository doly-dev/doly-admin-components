import React from "react";
import { InputNumberProps } from "antd/es/input-number";

interface ExtendInputNumberProps extends InputNumberProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export { ExtendInputNumberProps as InputNumberProps };

declare const InputNumber: React.FC<ExtendInputNumberProps>;

export default InputNumber;