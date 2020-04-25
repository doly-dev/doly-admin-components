import React, { useState, useCallback } from "react";
import { PhotoshopPicker } from "react-color";
import PickerWrapper from "./PickerWrapper";
import { transformColor } from "./utils";
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
  const [innerColor, setInnerColor] = useState(value);

  const handleChangeComplete = useCallback(color => {
    setInnerColor(transformColor(color, colorMode));
  }, []);

  const handleAccept = useCallback(() => {
    onChange(innerColor);
  }, [innerColor, colorMode]);

  return (
    <PickerWrapper
      placement="topLeft"
      {...wrapperProps}
      overlayClassName={styles.overlayNormalize}
      childrenProps={{
        color: innerColor,
        onChangeComplete: handleChangeComplete,
        onAccept: handleAccept,
        cancelable: true
      }}
      photoshop={true}
    >
      <PhotoshopPicker {...restProps} />
    </PickerWrapper>
  );
};
