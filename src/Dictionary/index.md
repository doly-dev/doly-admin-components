---
title: Dictionary
group:
  title: 通用组件
  path: /common
  order: 1
legacy: /common/dictionary
---

# Dictionary

> 建议拷贝文件放在 `src/components` 目录

用于 `数据字典` 的显示 和 选择，可直接应用于 `antd` 表单中。

数据结构必须含有 `value` `name`

```
[
  {
    value: 1,
    name: "审核中"
  },
  ...
]
```

**安装依赖**

```
npm i antd@4
```

> - [`antd`](https://ant.design/components/popover-cn/)

## 代码演示

### 字典值

<code src="./demo/Demo1.jsx" />

### 状态 & 颜色

<code src="./demo/Demo1.1.jsx" />

### 选择字典值

<code src="./demo/Demo2.jsx" />

### Form 中使用

<code src="./demo/Demo3.jsx" />

### 不显示全部

<code src="./demo/Demo4.jsx" />

### 自定义排除项和全部

<code src="./demo/Demo5.jsx" />

## API

### Dictionary

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
data  | 包含 `value` `name` 的 `数据字典` | `array<object>` | `[]` |
value  | 字典值 | `any` | - |
defaultName  | 当找不到字典值对应的名称时，显示默认名称 | `string` | `-` |

### Dictionary.Select

除了以下参数，其余和 [`antd Select`](https://ant.design/components/select-cn/) 组件一样。

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
data  | 包含 `value` `name` 的 `数据字典` | `array<object>` | `[]` |
value  | 字典值 | `any` | - |
all  | 是否显示全部  | `boolean` | `true` |
allValue | 全部的值 | `string` | `""` |
allName | 全部的名称 | `string` | `全部` |
excludeValues | 排除的值 | `array` | `[]` |
