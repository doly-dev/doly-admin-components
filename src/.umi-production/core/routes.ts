import { ApplyPluginsType } from '/Users/caijinfeng/Desktop/projects/doly-admin-components/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/_demos/demo1",
    "component": require('../../CascaderWithInput/demo/Demo1.jsx').default
  },
  {
    "path": "/_demos/demo2",
    "component": require('../../CascaderWithInput/demo/Demo2.jsx').default
  },
  {
    "path": "/_demos/demo1-1",
    "component": require('../../Color/demo/Demo1.jsx').default
  },
  {
    "path": "/_demos/demo2-1",
    "component": require('../../Color/demo/Demo2.jsx').default
  },
  {
    "path": "/_demos/demo3",
    "component": require('../../Color/demo/Demo3.jsx').default
  },
  {
    "path": "/_demos/demo1-2",
    "component": require('../../CommonForm/demo/Demo1.jsx').default
  },
  {
    "path": "/_demos/demo2-2",
    "component": require('../../CommonForm/demo/Demo2.jsx').default
  },
  {
    "path": "/_demos/demo3-1",
    "component": require('../../CommonForm/demo/Demo3.jsx').default
  },
  {
    "path": "/_demos/demo4",
    "component": require('../../CommonForm/demo/Demo4.jsx').default
  },
  {
    "path": "/_demos/demo5",
    "component": require('../../CommonForm/demo/Demo5.jsx').default
  },
  {
    "path": "/_demos/demo6",
    "component": require('../../CommonForm/demo/Demo6.jsx').default
  },
  {
    "path": "/_demos/demo1-3",
    "component": require('../../CountDownButton/demo/Demo1.jsx').default
  },
  {
    "path": "/_demos/demo2-3",
    "component": require('../../CountDownButton/demo/Demo2.jsx').default
  },
  {
    "path": "/_demos/demo1-4",
    "component": require('../../Dictionary/demo/Demo1.jsx').default
  },
  {
    "path": "/_demos/demo1.1",
    "component": require('../../Dictionary/demo/Demo1.1.jsx').default
  },
  {
    "path": "/_demos/demo2-4",
    "component": require('../../Dictionary/demo/Demo2.jsx').default
  },
  {
    "path": "/_demos/demo3-2",
    "component": require('../../Dictionary/demo/Demo3.jsx').default
  },
  {
    "path": "/_demos/demo4-1",
    "component": require('../../Dictionary/demo/Demo4.jsx').default
  },
  {
    "path": "/_demos/demo5-1",
    "component": require('../../Dictionary/demo/Demo5.jsx').default
  },
  {
    "path": "/_demos/demo6-1",
    "component": require('../../Dictionary/demo/Demo6.jsx').default
  },
  {
    "path": "/_demos/demo7",
    "component": require('../../Dictionary/demo/Demo7.jsx').default
  },
  {
    "path": "/_demos/demo1-5",
    "component": require('../../InputNumber/demo/Demo1.jsx').default
  },
  {
    "path": "/_demos/demo2-5",
    "component": require('../../InputNumber/demo/Demo2.jsx').default
  },
  {
    "path": "/_demos/demo1-6",
    "component": require('../../SearchForm/demo/Demo1.jsx').default
  },
  {
    "path": "/_demos/demo2-6",
    "component": require('../../SearchForm/demo/Demo2.jsx').default
  },
  {
    "path": "/_demos/demo1.1-1",
    "component": require('../../SearchForm/demo/Demo1.1.jsx').default
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/caijinfeng/Desktop/projects/doly-admin-components/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"README","meta":{"order":null}},{"title":"通用组件","path":"/common","meta":{"order":0},"children":[{"path":"/common/color","title":"Color","meta":{}},{"path":"/common/dictionary","title":"Dictionary","meta":{}},{"path":"/common/input-number","title":"InputNumber","meta":{}},{"path":"/common/count-down-button","title":"CountDownButton","meta":{}},{"path":"/common/cascader-with-input","title":"CascaderWithInput","meta":{}}]},{"title":"业务组件","path":"/business","meta":{"order":1},"children":[{"path":"/business/common-form","title":"CommonForm","meta":{}},{"path":"/business/search-form","title":"SearchForm","meta":{}}]}]}},"locales":[],"navs":{},"title":"doly-admin-components","logo":"https://www.caijinfeng.com/assets/images/logo-doly@3x.png","mode":"doc","repoUrl":"https://github.com/doly-dev/doly-admin-components"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../README.md').default,
        "exact": true,
        "meta": {
          "locale": "zh-CN",
          "title": "README",
          "order": null
        },
        "title": "README"
      },
      {
        "path": "/common/cascader-with-input",
        "component": require('../../CascaderWithInput/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/CascaderWithInput/index.md",
          "updatedTime": 1590921017000,
          "title": "CascaderWithInput",
          "group": {
            "title": "通用组件",
            "path": "/common",
            "order": 0
          },
          "legacy": "/common/cascader-with-input",
          "slugs": [
            {
              "depth": 1,
              "value": "CascaderWithInput",
              "heading": "cascaderwithinput"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "省/市/区+详细地址",
              "heading": "省市区详细地址"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "CascaderWithInput"
      },
      {
        "path": "/common/color",
        "component": require('../../Color/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Color/index.md",
          "updatedTime": 1589725391000,
          "title": "Color",
          "group": {
            "title": "通用组件",
            "path": "/common",
            "order": 0
          },
          "legacy": "/common/color",
          "slugs": [
            {
              "depth": 1,
              "value": "Color",
              "heading": "color"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "显示颜色",
              "heading": "显示颜色"
            },
            {
              "depth": 3,
              "value": "选择颜色",
              "heading": "选择颜色"
            },
            {
              "depth": 3,
              "value": "Form 中使用",
              "heading": "form-中使用"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Color",
              "heading": "color-1"
            },
            {
              "depth": 3,
              "value": "Picker 共同的 API",
              "heading": "picker-共同的-api"
            },
            {
              "depth": 3,
              "value": "Color.BlockPicker",
              "heading": "colorblockpicker"
            },
            {
              "depth": 3,
              "value": "Color.ChromePicker",
              "heading": "colorchromepicker"
            },
            {
              "depth": 3,
              "value": "Color.CompactPicker",
              "heading": "colorcompactpicker"
            },
            {
              "depth": 3,
              "value": "Color.PhotoshopPicker",
              "heading": "colorphotoshoppicker"
            },
            {
              "depth": 3,
              "value": "Color.SketchPicker",
              "heading": "colorsketchpicker"
            }
          ]
        },
        "title": "Color"
      },
      {
        "path": "/business/common-form",
        "component": require('../../CommonForm/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/CommonForm/index.md",
          "updatedTime": 1591117383000,
          "title": "CommonForm",
          "group": {
            "title": "业务组件",
            "path": "/business",
            "order": 1
          },
          "legacy": "/business/common-form",
          "slugs": [
            {
              "depth": 1,
              "value": "CommonForm",
              "heading": "commonform"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "创建用户",
              "heading": "创建用户"
            },
            {
              "depth": 3,
              "value": "修改密码",
              "heading": "修改密码"
            },
            {
              "depth": 3,
              "value": "忘记密码",
              "heading": "忘记密码"
            },
            {
              "depth": 3,
              "value": "企业信息",
              "heading": "企业信息"
            },
            {
              "depth": 3,
              "value": "结算信息",
              "heading": "结算信息"
            },
            {
              "depth": 3,
              "value": "返佣信息",
              "heading": "返佣信息"
            },
            {
              "depth": 3,
              "value": "脱敏校验",
              "heading": "脱敏校验"
            }
          ]
        },
        "title": "CommonForm"
      },
      {
        "path": "/common/count-down-button",
        "component": require('../../CountDownButton/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/CountDownButton/index.md",
          "updatedTime": 1590914912000,
          "title": "CountDownButton",
          "group": {
            "title": "通用组件",
            "path": "/common",
            "order": 0
          },
          "legacy": "/common/count-down-button",
          "slugs": [
            {
              "depth": 1,
              "value": "CountDownButton",
              "heading": "countdownbutton"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "获取手机验证码",
              "heading": "获取手机验证码"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "CountDownButton"
      },
      {
        "path": "/common/dictionary",
        "component": require('../../Dictionary/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Dictionary/index.md",
          "updatedTime": 1591074419000,
          "title": "Dictionary",
          "group": {
            "title": "通用组件",
            "path": "/common",
            "order": 0
          },
          "legacy": "/common/dictionary",
          "slugs": [
            {
              "depth": 1,
              "value": "Dictionary",
              "heading": "dictionary"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "字典值",
              "heading": "字典值"
            },
            {
              "depth": 3,
              "value": "多种展示方式",
              "heading": "多种展示方式"
            },
            {
              "depth": 3,
              "value": "选择字典值",
              "heading": "选择字典值"
            },
            {
              "depth": 3,
              "value": "Form 中使用 Select",
              "heading": "form-中使用-select"
            },
            {
              "depth": 3,
              "value": "不显示全部",
              "heading": "不显示全部"
            },
            {
              "depth": 3,
              "value": "自定义排除项和全部",
              "heading": "自定义排除项和全部"
            },
            {
              "depth": 3,
              "value": "单选框",
              "heading": "单选框"
            },
            {
              "depth": 3,
              "value": "Form 中使用 Radio",
              "heading": "form-中使用-radio"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Dictionary",
              "heading": "dictionary-1"
            },
            {
              "depth": 3,
              "value": "Dictionary.Select",
              "heading": "dictionaryselect"
            },
            {
              "depth": 3,
              "value": "Dictionary.Radio",
              "heading": "dictionaryradio"
            }
          ]
        },
        "title": "Dictionary"
      },
      {
        "path": "/common/input-number",
        "component": require('../../InputNumber/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/InputNumber/index.md",
          "updatedTime": 1591023791000,
          "title": "InputNumber",
          "group": {
            "title": "通用组件",
            "path": "/common",
            "order": 0
          },
          "legacy": "/common/input-number",
          "slugs": [
            {
              "depth": 1,
              "value": "InputNumber",
              "heading": "inputnumber"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "Form 中使用",
              "heading": "form-中使用"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "InputNumber"
      },
      {
        "path": "/business/search-form",
        "component": require('../../SearchForm/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/SearchForm/index.md",
          "updatedTime": 1588952966000,
          "title": "SearchForm",
          "group": {
            "title": "业务组件",
            "path": "/business",
            "order": 1
          },
          "legacy": "/business/search-form",
          "slugs": [
            {
              "depth": 1,
              "value": "SearchForm",
              "heading": "searchform"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "提交记录查询",
              "heading": "提交记录查询"
            },
            {
              "depth": 3,
              "value": "审核记录查询",
              "heading": "审核记录查询"
            },
            {
              "depth": 2,
              "value": "使用示例",
              "heading": "使用示例"
            },
            {
              "depth": 3,
              "value": "提交记录",
              "heading": "提交记录"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "SearchForm"
      },
      {
        "path": "/common",
        "meta": {
          "order": 0
        },
        "exact": true,
        "redirect": "/common/color"
      },
      {
        "path": "/common/cascader-with-input",
        "exact": true,
        "redirect": "/common/cascader-with-input"
      },
      {
        "path": "/common/color",
        "exact": true,
        "redirect": "/common/color"
      },
      {
        "path": "/business",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/business/common-form"
      },
      {
        "path": "/business/common-form",
        "exact": true,
        "redirect": "/business/common-form"
      },
      {
        "path": "/common/count-down-button",
        "exact": true,
        "redirect": "/common/count-down-button"
      },
      {
        "path": "/common/dictionary",
        "exact": true,
        "redirect": "/common/dictionary"
      },
      {
        "path": "/common/input-number",
        "exact": true,
        "redirect": "/common/input-number"
      },
      {
        "path": "/business/search-form",
        "exact": true,
        "redirect": "/business/search-form"
      }
    ],
    "title": "doly-admin-components"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
