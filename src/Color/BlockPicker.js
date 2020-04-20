import React, { useCallback, useState } from "react";
import { Popover } from "antd";
import { BlockPicker } from "react-color";
// import useStyles from "./style";

import styles from "./style.less";

export default ({
  value,
  showText = false,
  trigger = "click",
  onChange = () => { },
  colors = ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']
}) => {
  const [visible, setVisible] = useState(false);
  // const classes = useStyles();

  const handleChangeComplete = useCallback(color => {
    onChange(color.hex);
  }, []);

  return (
    <span className={styles.root}>
      <Popover
        content={
          <BlockPicker
            onChangeComplete={handleChangeComplete}
            color={value || "transparent"}
            colors={colors}
          />
        }
        trigger={trigger}
        visible={visible}
        onVisibleChange={setVisible}
        autoAdjustOverflow={false}
        placement="bottom"
        overlayClassName={styles.overlay}
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
