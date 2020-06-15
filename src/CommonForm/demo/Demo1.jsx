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

// 过滤密码的数字、字母，剩余的为特殊字符
const checkSpecialChar = (val, supportSpecialChars = "-_!@#$%^&*") => {
  const ret = {
    validated: true,
    message: ""
  }
  // 过滤出特殊字符
  const specialChar = val.replace(/[a-z]/gi, "").replace(/\d/g, "");

  // 不存在特殊字符
  if (specialChar.length <= 0) {
    return ret;
  }

  // 当前特殊字符拆分数组
  const specialCharArr = specialChar.split("");
  specialCharArr.some(item => {
    if (supportSpecialChars.indexOf(item) === -1) {
      ret.validated = false;
      ret.message = `密码的特殊符号只能为${supportSpecialChars}`;
    }
    return !ret.validated
  });

  return ret;
}

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
              } else if (value.length > 32 || value.length < 2) {
                errMsg = "姓名为2～32位";
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
              } else if (value.length < 6 || value.length > 32) {
                errMsg = "用户名为6~32位";
              } else if (isMobile(value)) {
                errMsg = "用户名不能为手机号码";
              } else if (value.indexOf("@") > -1) {
                errMsg = "用户名不能包含空格和@符号";
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
                errMsg = "请输入正确的身份证号";
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
              } else if (value.length < 8 || value.length > 16) {
                errMsg = "密码为8～16位";
              } else {
                // 校验特殊字符
                const validateSpecialChar = checkSpecialChar(value);
                if (!validateSpecialChar.validated) {
                  errMsg = validateSpecialChar.message;
                } else if (!isPassword(value, { level: 2 })) {
                  errMsg = "密码为大小写字母、数字或符号任意两者组合";
                }
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
