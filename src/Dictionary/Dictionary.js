import React from "react";
import { Badge, Tag } from "antd";

export default ({ data = [], value = "", defaultName = "-", type = "text", optionName = "", ...restProps }) => {
  const ret = data.find(item => item.value === value);

  if (!ret) {
    return defaultName;
  }

  let options = (optionName ? ret[optionName] : ret[type]) || {};

  if (type === "tag") {
    return <Tag {...options} {...restProps}>{options.alias || ret.name}</Tag>
  }

  if (type === "badge") {
    return <Badge text={options.alias || ret.name} {...options} {...restProps} />;
  }

  return <span {...options} {...restProps}>{options.alias || ret.name}</span>;
};
