import React from "react";
import { ButtonProps } from "antd/es/button";

export interface CountDownButtonProps extends ButtonProps {
  start?: boolean;
  second?: number;
  onEnd?: () => void;
  initText?: string;
  runText?: string;
  resetText?: string;
}

declare const CountDownButton: React.FC<CountDownButtonProps>;

export default CountDownButton;