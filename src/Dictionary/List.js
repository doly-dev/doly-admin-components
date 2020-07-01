import React, { useMemo } from 'react';
import { Space } from "antd";
import Dictionary from "./Dictionary";

// tag 类型默认样式
const tagDefaultStyle = {
  margin: 0
}

export default ({
  size = "small",
  align,
  direction,
  defaultValue = "-",

  value = [],
  type = "text",
  style = {},
  ...restProps
}) => {
  const styles = useMemo(() => type === "tag" ? { ...tagDefaultStyle, ...style } : { ...style }, [type, style]);

  return (
    <Space size={size} align={align} direction={direction}>
      {
        !Array.isArray(value) || value.length <= 0 ? defaultValue : value.map(itemVal => (
          <Dictionary
            key={itemVal}
            value={itemVal}
            style={styles}
            type={type}
            {...restProps}
          />
        ))
      }
    </Space>
  )
}