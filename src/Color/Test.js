import React, { useContext } from "react";
import VisibleContext from "./VisibleContext";

export default () => {
  const { setVisible } = useContext(VisibleContext);
  console.log(setVisible);
  return <div>121</div>
}