import React, { useMemo } from "react";
import { Select } from "antd";

export default ({ data = [], excludeValues = [], value = "", all = true, allValue = "", allName = "全部", ...restProps }) => {

  const dataRet = useMemo(() => {
    return data.slice().filter(item => excludeValues.indexOf(item.value) === -1);
  }, [data, excludeValues]);

  return (
    <Select placeholder="请选择" value={value} {...restProps}>
      {
        all ? <Select.Option value={allValue}>{allName}</Select.Option> : null
      }
      {
        dataRet.map(item => (
          <Select.Option key={item.value + item.name} value={item.value}>{item.name}</Select.Option>
        ))
      }
    </Select>
  )
}
