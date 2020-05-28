import React from "react";
import { InputNumber } from "antd";
import styles from "./style.less";

export default ({
  after = "",
  before = "",
  style = {},
  className = "",
  ...restProps
}) => {
  return (
    <div className={`${styles.numberInputWrapper} ${className || ''}`} style={style}>
      {
        before && <div style={{ margin: "0 8px" }}>{before}</div>
      }
      <InputNumber {...restProps} />
      {
        after && <div style={{ margin: "0 8px" }}>{after}</div>
      }
    </div>
  )
}
