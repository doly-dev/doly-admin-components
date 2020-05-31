/**
 * title: 基础用法
 * desc: 注意 `value` 格式 `array<array, string>` ，如：`[[],""]`，分别对应着 `Cascader` `Input` 的 `value` 。
 */

import React, { useCallback, useState } from "react";
import lcnData from "lcn/lcn-form";
import CascaderWithInput from "..";

export default () => {
  const [value, setValue] = useState([[], '']);

  const onChange = useCallback(values => {
    setValue(values);
  }, []);

  return (
    <>
      <CascaderWithInput value={value} options={lcnData} onChange={onChange} />
      <br />
      <div>value: {JSON.stringify(value)}</div>
    </>
  )
}