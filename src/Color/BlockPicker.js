import React, { useMemo } from "react";
import { BlockPicker } from "react-color";
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
    <PickerWrapper {...wrapperProps} overlayClassName={styles.overlayNormalize}>
      <BlockPicker {...restProps} triangle="hide" />
    </PickerWrapper>
  );
};
