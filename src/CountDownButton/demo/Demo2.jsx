import React, { useCallback, useState, useRef } from "react";
import { Form, Input, message, Row, Col, Button } from "antd";
import { isMobile } from "util-helpers";
import { useAsync } from "rc-hooks";
import CountDownButton from "../CountDownButton";
import {
  COUNTDOWN_BUTTON_STATE_INIT,
  COUNTDOWN_BUTTON_STATE_LOADING,
  COUNTDOWN_BUTTON_STATE_PROCESS
} from "../types";

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

// 初始值
const initialValues = {
  mobile: "",
  code: {
    requestId: "",
    validateCode: ""
  }
}

// 规整化参数
const normalizeValues = ({ mobile, code: { validateCode, requestId } }) => {
  return {
    mobile,
    validateCode,
    requestId
  }
}

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 }
};
const buttonItemLayout = {
  wrapperCol: { sm: { offset: 5 }, span: 16 }
};

export default () => {
  const [form] = Form.useForm();
  const [params, setParams] = useState(() => normalizeValues(initialValues));

  const onFinish = useCallback(values => {
    setParams(normalizeValues(values));
  }, []);

  return (
    <>
      <Form
        {...formItemLayout}
        onFinish={onFinish}
        form={form}
        initialValues={initialValues}
      >
        <Form.Item
          label="手机号码"
          name="mobile"
          validateFirst
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              message: "请输入手机号码"
            },
            {
              validator: (rule, value) => {
                if (!isMobile(value)) {
                  return Promise.reject("格式错误");
                }
                return Promise.resolve();
              }
            }
          ]}
        >
          <Input placeholder="请输入手机号码" allowClear />
        </Form.Item>
        <Form.Item
          name="code"
          label="验证码"
          validateFirst
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              message: "请输入验证码"
            },
            {
              validator(rule, value) {
                if (!value.requestId) {
                  return Promise.reject("请获取验证码并输入");
                }

                if (!value.validateCode) {
                  return Promise.reject("请输入验证码");
                }

                return Promise.resolve();
              }
            }
          ]}
        >
          <VerificateCodeInput form={form} />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            确定
        </Button>
        </Form.Item>
      </Form>
      <div>params: {JSON.stringify(params)}</div>
    </>
  );
};
