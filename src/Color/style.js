import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "inline-block",
    lineHeight: 0,
    padding: "3px",
    borderRadius: "3px",
    border: "1px solid rgba(0,0,0,0.1)",
    verticalAlign: "middle"
  },
  color: {
    display: "inline-block",
    height: "16px",
    width: "16px",
    borderRadius: "2px",
    verticalAlign: "middle"
  },
  select: {
    "&.active, &:hover": {
      cursor: "pointer"
    }
  },
  overlay: {
    background: "none",

    "& .ant-popover-content > .ant-popover-arrow": {
      display: "none"
    },
    "& .ant-popover-inner-content": {
      padding: 0
    }
  }
});

export default useStyles;