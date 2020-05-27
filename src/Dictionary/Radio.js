import React from "react";
import { Radio } from "antd";

export default ({
  data,
  type = "default",
  ...restProps
}) => {
  const RadioComp = type === "button" ? Radio.Button : Radio;

  return (
    <Radio.Group {...restProps}>
      {
        data.map(({ value, name, disabled }) => (
          <RadioComp value={value} key={value} disabled={disabled}>{name}</RadioComp>
        ))
      }
    </Radio.Group>
  )
}