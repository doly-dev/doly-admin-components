---
title: CascaderWithInput
group:
  title: 通用组件
  path: /common
  order: 0
legacy: /common/cascader-with-input
---

# CascaderWithInput

> 建议拷贝文件放在 `src/components` 目录

[`Cascader`](https://ant.design/components/cascader-cn/#API) 和 [`Input`](https://ant.design/components/input-cn/#API) 组件结合，常用于省市区+详细地址，适用于 `antd` 表单中。

**安装依赖**

```
npm i antd
```

> - [`antd`](https://ant.design/components/popover-cn/)

## 代码演示

### 基本用法

<code src="./demo/Demo1.jsx" />

### 省/市/区+详细地址 

<code src="./demo/Demo2.jsx" />


## API

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
value  | 指定选中项和输入框的值 | `array<array, string>` | `[[],""]` |
options  | 可选项数据源 | `array` | `[]` |
onChange  | 值改变后的回调 | `(value) => void` | - |
cascaderProps  | [`Cascader`](https://ant.design/components/cascader-cn/#API)组件配置项 | `object` | - |
inputProps | [`Input`](https://ant.design/components/input-cn/#API)组件配置项 | `object` | - |
form | 经 `Form.useForm()` 创建的 `form` 控制实例。当 `validateTrigger` 为 `onBlur` 时，必须传入才生效。 | [`FormInstance`](https://ant.design/components/form-cn/#FormInstance) | - |