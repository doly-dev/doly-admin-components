import React, { useCallback, useState, useRef } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { isMobile, isPassword } from "util-helpers";
import { useAsync } from "rc-hooks";

import CountDownButton from "../../CountDownButton";
import {
  COUNTDOWN_BUTTON_STATE_INIT,
  COUNTDOWN_BUTTON_STATE_LOADING,
  COUNTDOWN_BUTTON_STATE_PROCESS
} from "../../CountDownButton/types";

// 接口：发送短信验证码
function asyncSendVerificationCode() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          requestId: "abcdefg"
        }
      })
    }, 1000);
  });
}

// 组件：验证码和获取验证码按钮
function VerificateCodeInput({
  mobileField = "mobile",
  form = {},
  value = {},
  onChange = () => { }
}) {
  const inputRef = useRef(null);
  const [buttonState, setButtonState] = useState(COUNTDOWN_BUTTON_STATE_INIT); // 倒计时按钮状态

  const { run } = useAsync(asyncSendVerificationCode, { autoRun: false });

  const triggerChange = changeValue => {
    onChange({ ...value, ...changeValue });
  };

  const onCodeBlur = () => {
    form.validateFields(["code", "validateCode"]);
  }

  const onCodeChange = e => {
    triggerChange({ validateCode: e.target.value });
  };

  const onButtonClick = () => {
    // 校验手机号码
    form.validateFields([mobileField]).then((values) => {
      setButtonState(COUNTDOWN_BUTTON_STATE_LOADING);

      return run({ mobile: values[mobileField] }).then(res => {
        triggerChange({ requestId: res.data.requestId });
        setButtonState(COUNTDOWN_BUTTON_STATE_PROCESS);
        inputRef.current.focus();
      });
    }).catch(() => {
      message.error("请输入正确的手机号码");
    });
  };

  const handleProcessEnd = useCallback(() => {
    setButtonState(COUNTDOWN_BUTTON_STATE_INIT);
  }, []);

  return (
    <Row gutter={8}>
      <Col span={16}>
        <Input
          placeholder="请输入验证码"
          onChange={onCodeChange}
          onBlur={onCodeBlur}
          value={value.validateCode}
          maxLength={6}
          allowClear
          ref={inputRef}
        />
      </Col>
      <Col span={8}>
        <CountDownButton
          block
          state={buttonState}
          onClick={onButtonClick}
          onProcessEnd={handleProcessEnd}
        />
      </Col>
    </Row>
  );
}

// 去掉空格
function removeWhiteSpace(val) {
  if (typeof val === "string") {
    return val.replace(/\s/g, "");
  }
  return val;
}

// 验证密码
function verifierPassword(value, label = "密码") {
  let errMsg = "";
  if (!value) {
    errMsg = `请输入${label}`;
  } else if (value.length < 8) {
    errMsg = "密码不能小于8位";
  } else if (!isPassword(value, { level: 2 })) {
    errMsg = "密码为字母、数字或符号任意两者组合";
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
  mobile: "",
  code: {
    requestId: "",
    validateCode: ""
  },
  // requestId: "",
  // validateCode: "",
  newPassword: "",
  resetPassword: ""
}

export default () => {
  const [form] = Form.useForm();
  const onFinish = useCallback(({ code, ...restValues }) => {
    console.log(code);
    const { requestId, validateCode } = code;
    const values = { requestId, validateCode, ...restValues };
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
      name="common_form_3"
    >
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
        name="code"
        label="验证码"
        validateTrigger="onBlur"
        required
        rules={[
          {
            validator(rule, value) {
              let errMsg = "";
              if (!value || !value.requestId) {
                errMsg = "请获取验证码并输入";
              } else if (!value.validateCode) {
                errMsg = "请输入验证码";
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        <VerificateCodeInput form={form} />
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
