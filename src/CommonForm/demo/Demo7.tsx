/**
 * title: 脱敏校验
 * desc: |
 *    应用于`修改页面`，并且由服务端对数据进行脱敏。
 * 
 *    先将表单项和初始数据进行比较，如果不一致就进行正常的验证流程。一致就表示没有变动，直接将脱敏数据提交给服务。服务逐项验证数据含有脱敏信息就不做更新该项，否则正常验证和更新。
 * 
 *    **注意这里的过滤输入方法跟上面不同，支持 `*` 。**
 */
import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import { isMobile, isEmail, isIdCard } from "util-helpers";

import {
  normalizeNumberAndMask,
  normalizeIdCardAndMask,
  normalizeNotWhiteSpace,
  isBankCardNo
} from "./_utils";

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
  userName: "张三",
  mobile: "130****0000",
  email: "12****@qq.com",
  idCard: "130***********2288",
  bankCardNo: "563058********277"
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
      name="common_form_7"
    >
      <Form.Item
        label="姓名"
        name="userName"
        normalize={normalizeNotWhiteSpace}
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
        label="身份证号"
        name="idCard"
        normalize={normalizeIdCardAndMask}
        validateTrigger="onBlur"
        required
        rules={[
          {
            validator(rule, value) {
              let errMsg = "";
              if (!value) {
                errMsg = "请输入身份证号";
              } else if (initialValues.idCard && value === initialValues.idCard) {
                errMsg = "";
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
        normalize={normalizeNumberAndMask}
        validateTrigger="onBlur"
        required
        rules={[
          {
            validator(rule, value) {
              let errMsg = "";
              if (!value) {
                errMsg = "请输入手机号码";
              } else if (initialValues.mobile && value === initialValues.mobile) {
                errMsg = "";
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
        normalize={normalizeNotWhiteSpace}
        validateTrigger="onBlur"
        rules={[
          {
            validator(rule, value) {
              let errMsg = "";

              if (value) {
                if (initialValues.email && value === initialValues.email) {
                  errMsg = "";
                } else if (!isEmail(value)) {
                  errMsg = "请输入正确的邮箱";
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
        <Input placeholder="请输入邮箱（选填）" allowClear autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="银行卡号"
        name="bankCardNo"
        normalize={normalizeNumberAndMask}
        validateTrigger="onBlur"
        required
        rules={[
          {
            validator(rule, value) {
              let errMsg = "";
              if (!value) {
                errMsg = "请输入银行卡号";
              } else if (initialValues.bankCardNo && value === initialValues.bankCardNo) {
                errMsg = "";
              } else if (!isBankCardNo(value)) {
                errMsg = "请输入正确的银行卡号";
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        <Input placeholder="请输入银行卡号" allowClear autoComplete="off" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  )
}
