import React from "react";
import { SketchPicker } from "react-color";
import PickerWrapper from "./PickerWrapper";

import styles from "./style.less";

export default ({
  value,
  trigger,
  showText,
  onChange,
  colorMode,
  placement,
  ...restProps
}) => {
  const wrapperProps = { value, trigger, showText, onChange, colorMode, placement };

  return (
    <PickerWrapper placement="topLeft" {...wrapperProps} overlayClassName={styles.overlayNormalize}>
      <SketchPicker {...restProps} disableAlpha={colorMode !== 'rgb'} />
    </PickerWrapper>
  );
};
