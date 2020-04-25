import React from "react";
import { EditableInput } from "react-color/lib/components/common";
console.log(EditableInput);

export default (props) => {
  return (
    <EditableInput label="hex" {...props} />
  );
};
