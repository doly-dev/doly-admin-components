import React from "react";
import { Badge, Tag } from "antd";

export default ({
  data = [],
  value = "",
  defaultName = "-",
  type = "text",
  optionName = "",
  ...restProps
}) => {
  const ret = data.find(item => item.value === value);

  if (!ret) {
    return defaultName;
  }

  const options = (optionName ? ret[optionName] : ret[type]) || {};
  const { alias, ...restOptions } = options;
  const props = { ...restOptions, ...restProps };
  const name = alias || ret.name;

  if (type === "tag") {
    return <Tag {...props}>{name}</Tag>
  }

  if (type === "badge") {
    return <Badge text={name} {...props} />;
  }

  return <span {...props}>{name}</span>;
};
