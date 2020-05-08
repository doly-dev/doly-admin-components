import React from "react";
import { Badge } from "antd";

const suportStatus = ["success", "processing", "default", "error", "warning"];

export default ({ data = [], value = "", defaultName = "-" }) => {
  const ret = data.find(item => item.value === value) || {};

  if (!ret.name) {
    return defaultName;
  }

  if (ret.color) {
    return <span style={{ color: ret.color }}>{ret.name}</span>
  }

  if (ret.status && suportStatus.indexOf(ret.status) > -1) {
    return <Badge status={ret.status} text={ret.name} />
  }

  return ret.name;
}
