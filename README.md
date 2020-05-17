# doly-admin-components

管理平台常用业务组件库。[查看文档和示例][site]

## 使用

请参照文档拷贝需要用到的组件到项目中，安装对应依赖后使用。

- **通用组件** 一般放在 `src/components`
- **业务组件** 一般放在 `src/pages/your page folder/components`

**注意：由于大部分组件是基于 [antd] 封装，如果单独发包将无法按需加载。每个组件都有单独的依赖，需自行安装依赖**

## 已有组件

- 通用组件
  - [Color] - 显示颜色、选择颜色，可直接用于 `antd` 表单中。
  - [Dictionary] - `数据字典` 的显示 和 选择，可直接用于 `antd` 表单中。
  - [CountDownButton] - 倒计时按钮，如获取验证码
- 业务组件
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
[CountDownButton]: https://doly-dev.github.io/doly-admin-components/site/#/common/count-down-button

[SearchForm]: https://doly-dev.github.io/doly-admin-components/site/#/business/search-form
