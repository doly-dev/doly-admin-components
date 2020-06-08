import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import { isMobile, isEmail, isPassword, isIdCard } from "util-helpers";

// 去掉空格
function removeWhiteSpace(val) {
  if (typeof val === "string") {
    return val.replace(/\s/g, "");
  }
  return val;
}

// 转为大写
function transformToUpperCase(str) {
  if (typeof str === "string") {
    return str.toUpperCase();
  }
  return str;
}

// 正则，1开头
const oneNumberFirstReg = /^1/;

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 }
};
const buttonItemLayout = {
  wrapperCol: {
    span: 16,
    sm: {
      offset: 5
    }
  }
};
const initialValues = {
  userName: "",
  loginName: "",
  mobile: "",
  email: "",
  idCard: "",
  password: "",
}

export default () => {
  const [form] = Form.useForm();

  const onFinish = useCallback((values) => {
    console.log(values);
  }, []);

  const onFinishFailed = useCallback(({ errorFields }) => {
    form.scrollToField(errorFields[0].name, {
      behavior: actions =>
        actions.forEach(({ el, top }) => {
          el.scrollTop = top - 88;
        })
    });
  }, []);

  return (
    <Form
      {...formItemLayout}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      name="common_form_1"
    >
      <Form.Item
        label="姓名"
        name="userName"
        normalize={removeWhiteSpace}
        validateTrigger="onBlur"
        required
        rules={[
          {
            validator: (rule, value) => {
              let errMsg = "";
              if (!value) {
                errMsg = "请输入姓名";
              } else if (value.length > 6) {
                errMsg = "不能超过6位";
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        <Input placeholder="请输入姓名" allowClear autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="用户名"
        name="loginName"
        normalize={removeWhiteSpace}
        validateTrigger="onBlur"
        required
        rules={[
          {
            validator: (rule, value) => {
              let errMsg = "";
              if (!value) {
                errMsg = "请输入用户名";
              } else if (oneNumberFirstReg.test(value)) {
                errMsg = "不能以“1”开头";
              } else if (value.indexOf("@") > -1) {
                errMsg = "不能包含@符号";
              } else if (value.length < 6) {
                errMsg = "不能小于6位";
              } else if (value.length > 32) {
                errMsg = "不能超过32位";
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        <Input placeholder="请输入用户名" maxLength={32} allowClear autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="身份证号"
        name="idCard"
        normalize={val => transformToUpperCase(removeWhiteSpace(val))}
        validateTrigger="onBlur"
        required
        rules={[
          {
            validator(rule, value) {
              let errMsg = "";
              if (!value) {
                errMsg = "请输入身份证号";
              } else if (!isIdCard(value)) {
                errMsg = "请输入有效的身份证号";
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        <Input placeholder="请输入身份证号" maxLength={18} allowClear autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="手机号码"
        name="mobile"
        normalize={removeWhiteSpace}
        validateTrigger="onBlur"
        required
        rules={[
          {
            validator(rule, value) {
              let errMsg = "";
              if (!value) {
                errMsg = "请输入手机号码";
              } else if (!isMobile(value)) {
                errMsg = "请输入正确的手机号码";
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        <Input placeholder="请输入手机号码" maxLength={11} allowClear autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="邮箱"
        name="email"
        normalize={removeWhiteSpace}
        validateTrigger="onBlur"
        rules={[
          {
            validator(rule, value) {
              if (value && !isEmail(value)) {
                return Promise.reject("请输入正确的邮箱");
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        <Input placeholder="请输入邮箱（选填）" allowClear autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        validateTrigger="onBlur"
        required
        rules={[
          {
            validator(rule, value) {
              let errMsg = "";
              if (!value) {
                errMsg = "请输入密码";
              } else if (value.length < 8) {
                errMsg = "密码不能小于8位";
              } else if (!isPassword(value, { level: 2 })) {
                errMsg = "密码为字母、数字或符号任意两者组合";
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        <Input.Password placeholder="请输入密码" maxLength={16} allowClear />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  )
}
