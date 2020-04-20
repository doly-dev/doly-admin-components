/**
 * title: 选择颜色
 */

import React, { useState } from "react";
import Color from "..";

export default () => {
  const [color, setColor] = useState('#e60000');

  return (
    <Color.BlockPicker value={color} onChange={setColor} showText />
  )
}