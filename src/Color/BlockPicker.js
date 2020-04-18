import React, { useCallback, useState } from "react";
import { Popover } from "antd";
import { BlockPicker } from "react-color";
import useStyles from "./style";

export default ({
  value,
  trigger = "click",
  onChange = () => { },
  colors = ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']
}) => {
  const [visible, setVisible] = useState(false);
  const classes = useStyles();

  const handleChangeComplete = useCallback(color => {
    onChange(color.hex);
  }, []);

  return (
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
      overlayClassName={classes.overlay}
    >
      <div className={`${classes.root} ${classes.select} ${visible ? "active" : ""}`} title={value}>
        <span
          className={classes.color}
          style={value ? { backgroundColor: value } : {}}
        />
      </div>
    </Popover>
  );
};
