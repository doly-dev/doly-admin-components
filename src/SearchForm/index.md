---
title: SearchForm
group:
  title: 业务组件
  path: /business
  order: 1
legacy: /business/search-form
---

# SearchForm

> 建议直接复制示例代码放在 `src/pages/your page folder/components` 目录下，命名为 `SearchForm.js`

查询表单，列举一些常用业务场景，需结合实际业务使用。

**安装依赖**

```
npm i antd@4
```

## 代码演示

### 提交记录查询

<code src="./demo/Demo1.tsx" />

### 审核记录查询

<code src="./demo/Demo2.tsx" />

## 使用示例

### 提交记录

<code src="./demo/Demo1.1.tsx" />

### 缓存查询条件

<code src="./demo/Demo1.2.tsx" />

## API

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
onSubmit | 提交表单且数据验证成功后回调事件 | `function` | `(values)=>{}` |
submitOnMount  | 初次加载提交表单 | `boolean` | `false` |
loading  | 查询 loading | `boolean` | `false` |
name  | 表单名称，会作为表单字段 `id` 前缀使用 | `string` | - |
defaultValues | 初次加载会跟初始值合并 | `object` | - |
