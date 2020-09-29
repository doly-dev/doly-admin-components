---
title: Color
group:
  title: 通用组件
  path: /common
  order: 0
legacy: /common/color
---

# Color

> 建议拷贝文件放在 `src/components` 目录

用于显示颜色、选择颜色，可直接应用于 `antd` 表单中。

**安装依赖**

```
npm i antd react-color@2
```

> - [`antd`](https://ant.design/components/popover-cn/)
> - [`react-color`](http://casesandberg.github.io/react-color/#api-individual)

## 代码演示

### 显示颜色

<code src="./demo/Demo1.tsx" />

### 选择颜色

<code src="./demo/Demo2.tsx" />

### Form 中使用

<code src="./demo/Demo3.tsx" />

## API

### Color

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
value  | 颜色值。支持 `hex` `rgb` | `string` | - |
showText  | 显示颜色值文本 | `boolean` | `false` |

### Picker 共同的 API

以下 API 为 `BlockPicker` `ChromePicker` `CompactPicker` `PhotoshopPicker` `SketchPicker` 共享的 API。

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
value  | 颜色值。支持 `hex` `rgb` | `string` | - |
showText  | 显示颜色值文本 | `boolean` | `false` |
onChange  | 当颜色值变动后触发。 | `(color) => void` | - |
trigger  | 触发行为，可选 `hover/click` | `string` | `click` |
colorMode  | 颜色模式，可选 `hex` `rgb` | `string` | `hex` |
placement  | 颜色选择浮层位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` |  `string`  | `bottomLeft` |

### Color.BlockPicker

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
width | 颜色选择浮层宽度 | `string` | `170px` |
colors  | 预置快捷选择颜色。支持 `hex` `rgb` |  `array<string>`  | - |

### Color.ChromePicker

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
renderers | 使用 `{canvas: Canvas}` 和 `canvas` 节点来处理 `SSR` | `object` | - |

### Color.CompactPicker

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
colors  | 预置快捷选择颜色。支持 `hex` `rgb` |  `array<string>`  | - |

### Color.PhotoshopPicker

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
header | 颜色选择浮层标题 | `string` | `Color Picker` |

### Color.SketchPicker

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
width | 颜色选择浮层宽度 | `number` | `200` |
renderers | 使用 `{canvas: Canvas}` 和 `canvas` 节点来处理 `SSR` | `object` | - |
presetColors  | 预置快捷选择颜色。支持 `hex` `rgb` |  `array<{color: string, title: string}>`  | - |