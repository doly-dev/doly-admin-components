---
title: CountDownButton
group:
  title: 通用组件
  path: /common
  order: 0
legacy: /common/count-down-button
---

# CountDownButton

> 建议拷贝文件放在 `src/components` 目录

倒计时按钮，如获取验证码。

**安装依赖**

```
npm i antd rc-countdown-view
```

> - [`antd`](https://ant.design/components/popover-cn/)
> - [`rc-countdown-view`](https://www.npmjs.com/package/rc-countdown-view)
> 
> 倒计时更多用法可参考：
> 
> - [`countdown`](https://caijf.github.io/countdown/) 
> - [`rc-countdown-view`](https://caijf.github.io/rc-countdown-view/) 

## 代码演示

### 基础用法

<code src="./demo/Demo1.jsx" />

### 获取手机验证码

<code src="./demo/Demo2.jsx" />

## API

除了以下参数，其余和 [`antd Button`](https://ant.design/components/button-cn/) 组件一样。

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
state  | 有三种状态，分别为 `init` `loading` `process` | `string` | `init` |
stateText  | 对应三种状态文本 | `object` | `{ init: '获取验证码', loading: '发送中', process: '重新获取' }` |
time  | 倒计时，单位毫秒 | `number` | `60 * 1000` |
onClick | 点击按钮回调，可用于处理请求和设置 `state` | `function` | - |
onProcessEnd | 倒计时结束时触发，可用于重置 `state` | `function` | - |