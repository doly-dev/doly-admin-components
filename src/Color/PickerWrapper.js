import React, { useCallback, useState, cloneElement } from "react";
import { Popover } from "antd";
import { transformColor } from "./utils";

import styles from "./style.less";

export default ({
  value,
  showText = false,
  trigger = "click",
  onChange = () => { },
  colorMode = "hex",
  placement = "bottomLeft",
  children,
  childrenProps = {},
  photoshop = false,
  ...restProps
}) => {
  const [visible, setVisible] = useState(false);

  const handleChangeComplete = useCallback(color => {
    onChange(transformColor(color, colorMode));
  }, []);

  const photoshopAction = {};

  if (photoshop && !photoshopAction.onCancel) {
    photoshopAction.onCancel = () => {
      childrenProps.onCancel && childrenProps.onCancel();
      setVisible(false);
    };
    photoshopAction.onAccept = () => {
      childrenProps.onAccept && childrenProps.onAccept();
      setVisible(false);
    };
  }

  return (
    <span className={styles.root}>
      <Popover
        content={cloneElement(children, {
          onChangeComplete: handleChangeComplete,
          color: value || "transparent",
          ...childrenProps,
          ...photoshopAction
        })}
        trigger={trigger}
        visible={visible}
        onVisibleChange={setVisible}
        autoAdjustOverflow={false}
        placement={placement}
        {...restProps}
      >
        <span className={`${styles.color} ${styles.select} ${visible ? "active" : ""}`} title={value}>
          <span
            className={styles.inner}
            style={value ? { backgroundColor: value } : {}}
          />
        </span>
      </Popover>
      {
        showText && <span className={styles.text}>{value}</span>
      }
    </span>
  );
};
