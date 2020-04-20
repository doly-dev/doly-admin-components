import React from "react";
import styles from "./style.less";

export default ({ value, showText = false }) => (
  <span className={styles.root}>
    <span className={styles.color} title={value}>
      <span className={styles.inner} style={{ backgroundColor: value }} />
    </span>
    {
      showText && <span className={styles.text}>{value}</span>
    }
  </span>
);
