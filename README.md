# Deprecated!

该仓库已停止维护，请使用 [antd-more](https://github.com/doly-dev/antd-more) 。

# doly-admin-components

管理平台常用业务组件库。[查看文档和示例][site]

## 使用

请参照文档拷贝需要用到的组件到项目中，安装对应依赖后使用。

- **通用组件** 一般放在 `src/components`
- **业务组件** 一般放在 `src/pages/your page folder/components`

**注意：由于大部分组件是基于 [antd] 封装，如果单独发包将无法按需加载。每个组件都有单独的依赖，需自行安装依赖**

## 已有组件

- 通用组件
  - [Color] - 显示颜色、选择颜色
  - [Dictionary] - 数据字典显示和选择
  - [InputNumber] - 用于获取标准数值，基于 `antd InputNumber` 扩展
  - [CountDownButton] - 倒计时按钮，如获取验证码
  - [CascaderWithInput] - `Cascader` 和 `Input` 组件结合，常用于省市区+详细地址
- 业务组件
  - [CommonForm] - 常用表单及校验
  - [SearchForm] - 查询表单

## 参与开发

将项目 `git clone` 到本地

**安装依赖**

```
npm i
```

**本地运行**

```
npm run dev
```

在 `src` 文件中编写组件、示例、文档

**构建文档**

```
npm run build:doc
```

提交代码到仓库即可。


[antd]: https://ant.design/

[site]: https://doly-dev.github.io/doly-admin-components/site/

[Color]: https://doly-dev.github.io/doly-admin-components/site/#/common/color
[Dictionary]: https://doly-dev.github.io/doly-admin-components/site/#/common/dictionary
[InputNumber]: https://doly-dev.github.io/doly-admin-components/site/#/common/input-number
[CountDownButton]: https://doly-dev.github.io/doly-admin-components/site/#/common/count-down-button
[CascaderWithInput]: https://doly-dev.github.io/doly-admin-components/site/#/common/cascader-with-input

[SearchForm]: https://doly-dev.github.io/doly-admin-components/site/#/business/search-form
[CommonForm]: https://doly-dev.github.io/doly-admin-components/site/#/business/common-form
