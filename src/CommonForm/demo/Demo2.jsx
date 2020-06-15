import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import { isPassword } from "util-helpers";

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

// 验证密码
function verifierPassword(value, label = "密码") {
  let errMsg = "";
  if (!value) {
    errMsg = `请输入${label}`;
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
  return {
    validated: !errMsg,
    message: errMsg
  }
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
  mobile: "13000000000",
  loginName: "guest_xxx",
  oldPassword: "",
  newPassword: "",
  resetPassword: ""
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
      name="common_form_2"
    >
      <Form.Item label="手机号码" name="mobile">
        <Input placeholder="请输入手机号码" allowClear autoComplete="off" disabled />
      </Form.Item>
      <Form.Item label="用户名" name="loginName">
        <Input placeholder="请输入用户名" allowClear autoComplete="off" disabled />
      </Form.Item>
      <Form.Item
        name="oldPassword"
        label="原密码"
        validateTrigger="onBlur"
        required
        rules={[
          ({ getFieldValue, validateFields }) => ({
            validator(rule, value) {
              const validateResult = verifierPassword(value, "原密码");

              // 如果新密码有值，校验新密码
              if (getFieldValue("newPassword")) {
                validateFields(["newPassword"]);
              }

              if (!validateResult.validated) {
                return Promise.reject(validateResult.message);
              }
              return Promise.resolve();
            }
          })
        ]}
      >
        <Input.Password placeholder="请输入原密码" maxLength={16} allowClear />
      </Form.Item>
      <Form.Item
        name="newPassword"
        label="新密码"
        validateTrigger="onBlur"
        required
        rules={[
          ({ getFieldValue, validateFields }) => ({
            validator(rule, value) {
              const validateResult = verifierPassword(value, "新密码");

              // 如果重复新密码有值，校验重复新密码
              if (getFieldValue("repetPassword")) {
                validateFields(["repetPassword"]);
              }

              // 与原密码做比较
              if (getFieldValue("oldPassword") && getFieldValue("oldPassword") === value) {
                return Promise.reject("新密码不能与原密码一致");
              }

              if (!validateResult.validated) {
                return Promise.reject(validateResult.message);
              }
              return Promise.resolve();
            }
          })
        ]}
      >
        <Input.Password placeholder="请输入新密码" maxLength={16} visibilityToggle={false} allowClear />
      </Form.Item>
      <Form.Item
        name="repetPassword"
        label="重复新密码"
        validateTrigger="onBlur"
        required
        rules={[
          ({ getFieldValue }) => ({
            validator(rule, value) {
              let errMsg = "";

              if (!value) {
                errMsg = "请再次输入新密码";
              } else if (value !== getFieldValue("newPassword")) { // 与新密码做比较
                errMsg = "两次输入的密码不一致";
              }

              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            }
          })
        ]}
      >
        <Input.Password placeholder="请再次输入新密码" maxLength={16} visibilityToggle={false} allowClear />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">确定</Button>
      </Form.Item>
    </Form>
  )
}
