import React from "react";
import { Badge } from "antd";

const suportStatus = ["success", "processing", "default", "error", "warning"];

export default ({ data = [], value = "", defaultName = "-", ...restProps }) => {
  const ret = data.find(item => item.value === value) || {};

  if (!ret.name) {
    return <span {...restProps}>defaultName</span>;
  }

  if (ret.color) {
    return <span style={{ color: ret.color }} {...restProps}>{ret.name}</span>
  }

  if (ret.status && suportStatus.indexOf(ret.status)) {
    return <Badge status={ret.status} text={ret.name} {...restProps} />
  }

  return <span {...restProps}>{ret.name}</span>;
}
