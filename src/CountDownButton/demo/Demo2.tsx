/**
 * title: 自定义
 */

import React, { useCallback, useState } from "react";
import CountDownButton from "..";

// 接口请求
function getValidateCode() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  })
}

export default () => {
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(() => {
    setLoading(true);
    getValidateCode().then(() => {
      setLoading(false);
      setStart(true);
    });
  }, []);
  const handleEnd = useCallback(() => {
    setStart(false);
  }, []);

  return (
    <CountDownButton
      start={start}
      second={10}
      onClick={handleClick}
      initText="点击开始倒计时"
      runText="剩余%s秒"
      resetText="重新开始"
      onEnd={handleEnd}
      loading={loading}
    />
  )
}