/**
 * title: 状态 & 颜色
 * desc: |
 *  数据中包含 `status` 将使用 `Badge` 组件显示，支持 `success | processing | default | error | warning` 。
 * 
 *  包含 `color` 的数据，会设置颜色。
 * 
 *  如果同时包含 `status` 和 `color` 只显示 `color` 。
 */

import React from "react";
import Dictionary from "..";

const enumStatus = [
  {
    value: 1,
    name: '审核中',
    status: "processing"
  },
  {
    value: 2,
    name: '审核通过',
    color: "green"
  },
  {
    value: 3,
    name: '审核不通过',
    status: "error",
    color: "red"
  },
];

export default () => {
  return (
    <>
      数据含 status：
      <Dictionary data={enumStatus} value={1} />
      <br />
      数据含 color：
      <Dictionary data={enumStatus} value={2} />
      <br />
      数据含 status 和 color：
      <Dictionary data={enumStatus} value={3} />
    </>
  )
}