---
title: Color
---

# Color

用于显示颜色、选择颜色，可直接应用于 `antd` 表单中。

**安装依赖**

```
npm i antd react-color
```

> - [`antd`](https://ant.design/components/popover-cn/)
> - [`react-jss`](https://cssinjs.org/react-jss)
> - [`react-color`](http://casesandberg.github.io/react-color/#api-individual)

## 代码演示

### 显示颜色

<code src="./demo/Demo1.jsx" />

### 选择颜色

<code src="./demo/Demo2.jsx" />

### Form 中使用

<code src="./demo/Demo3.jsx" />

## API

### Color

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
value  | 颜色值。支持 `hex` `rgb` | `string` | - |

### Color.BlockPicker

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
value  | 颜色值。支持 `hex` `rgb` | `string` | - |
onChange  | 当颜色值变动后触发。 | `(color) => void` | - |
trigger  | 触发行为，可选 `hover/click` | `string` | `click` |
colors  | 预置快捷选择颜色。支持 `hex` `rgb` |  `array<string>`  | `['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']` |
