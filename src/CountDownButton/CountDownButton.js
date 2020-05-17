import React, { useCallback, useRef, useEffect, useMemo } from "react";
import { Button } from "antd";
import CountDown from "rc-countdown-view";
import { 
  COUNTDOWN_BUTTON_STATE_INIT, 
  COUNTDOWN_BUTTON_STATE_LOADING, 
  COUNTDOWN_BUTTON_STATE_PROCESS 
} from "./types";

// 状态文本
const defaultStateText = {
  [COUNTDOWN_BUTTON_STATE_INIT]: '获取验证码',
  [COUNTDOWN_BUTTON_STATE_LOADING]: '发送中',
  [COUNTDOWN_BUTTON_STATE_PROCESS]: '重新获取'
};

const CountDownButton = ({
  state = COUNTDOWN_BUTTON_STATE_INIT,
  stateText = {},
  time = 60 * 1000,
  onProcessEnd = () => { },
  ...restProps
}) => {
  const countdownRef = useRef(null);
  const format = useCallback((timestamp) => timestamp / 1000, []);
  const mapStateText = useMemo(() => ({ ...defaultStateText, stateText }), [stateText]);

  useEffect(() => {
    if (state === COUNTDOWN_BUTTON_STATE_PROCESS) {
      countdownRef.current.start();
    }else{
      countdownRef.current.reset();
    }
  }, [state]);

  return (
    <>
      <Button {...restProps} disabled={state === 'process'} loading={state === COUNTDOWN_BUTTON_STATE_LOADING}>
        {mapStateText[state]}
        <span style={state !== COUNTDOWN_BUTTON_STATE_PROCESS ? { display: 'none' } : {}}>
          <CountDown time={time} format={format} ref={countdownRef} autoStart={false} onEnd={onProcessEnd} />s
        </span>
      </Button>
    </>
  )
}

export default CountDownButton;