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

倒计时按钮，如获取手机号验证码、邮箱验证码等场景。

**安装依赖**

```
npm i antd countdown-pro
```

> - [`antd`](https://ant.design/components/popover-cn/)
> - [`countdown-pro`](https://www.npmjs.com/package/countdown-pro)

## 代码演示

### 基础用法

<code src="./demo/Demo1.tsx" />

### 自定义

<code src="./demo/Demo2.tsx" />

### 获取手机验证码

<code src="./demo/Demo3.tsx" />

## API

除了以下参数，其余和 [`antd Button`](https://ant.design/components/button-cn/) 组件一样。

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
start  | 是否开始倒计时，当该值变动并且为 `true` 时 | `boolean` | `false` |
second  | 倒计时时长，单位秒 | `number` | `60` |
onEnd | 倒计时结束触发，可用于重置 `start` | `function` | - |
initText  | 初始显示文本 | `string` | `获取验证码` |
runText  | 倒计时显示文本，包含 `%s` 会自动替换为秒数 | `string` | `%s秒后重新获取` |
resetText  | 结束显示文本 | `string` | `重新获取验证码` |