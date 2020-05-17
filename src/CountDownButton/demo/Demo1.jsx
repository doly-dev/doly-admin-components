/**
 * title: 获取验证码
 * desc: 根据不同周期设置 `state`
 */

import React, { useCallback, useState } from "react";
import CountDownButton from "..";
import { 
  COUNTDOWN_BUTTON_STATE_INIT, 
  COUNTDOWN_BUTTON_STATE_LOADING, 
  COUNTDOWN_BUTTON_STATE_PROCESS 
} from "../types";

// 接口请求
function getValidateCode() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  })
}

export default () => {
  const [state, setState] = useState(COUNTDOWN_BUTTON_STATE_INIT);

  const handleClick = useCallback(() => {
    setState(COUNTDOWN_BUTTON_STATE_LOADING);
    getValidateCode().then(() => {
      setState(COUNTDOWN_BUTTON_STATE_PROCESS);
    });
  }, []);
  const handleTimerEnd = useCallback(() => {
    setState(COUNTDOWN_BUTTON_STATE_INIT);
  }, []);

  return (
    <CountDownButton
      state={state}
      onClick={handleClick}
      onProcessEnd={handleTimerEnd}
    />
  )
}