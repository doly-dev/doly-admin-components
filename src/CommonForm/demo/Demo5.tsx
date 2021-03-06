/**
 * title: 结算信息
 * desc: |
 *    这里 `银行卡号` 只校验8～30位数字，如果要在前端验证可参考《[常用银行账号位数参考](https://kf.qq.com/faq/170112ABnm6b170112FvquAn.html)》。正常情况下，需要走服务端校验。
 */
import React, { useCallback } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import lcnFormPC from "lcn/lcn-form-pc";

import Dictionary from "../../Dictionary";
import CascaderWithInput from "../../CascaderWithInput";
import styles from "./style.less";

import {
  normalizeNotWhiteSpace,
  normalizeNumber
} from "./_utils";

// 下面的枚举值请在单独文件维护
// 结算方式
// T1-T+1 D1-D+1
export const enumSettlementCycle = [
  {
    value: "T1",
    name: "T+1"
  },
  {
    value: "D1",
    name: "D+1"
  }
];
// 结算类型
// 0-对公 1-法人
export const enumBankCardType = [
  {
    value: "0",
    name: "对公账户"
  },
  {
    value: "1",
    name: "对私账户"
  }
];

// 过滤输入银行卡号
function filterInputBankCardNo(val) {
  if (val && typeof val === "string") {
    return val.replace(/[^\d]/g, "")
  }
  return val;
}

const oneColSpan = {
  span: 24
};
const twoColSpan = {
  span: 24,
  md: 12
};
const initialValues = {
  settlementCycle: "",
  bankCardType: "",
  bankCertName: "",
  bankCardNo: "",
  bankName: "",
  branchArr: [[], ""], // [[branchProvince, branchCity],branchName]
  // branchProvince: "",
  // branchCity: "",
  // branchName: "",
}

export default () => {
  const [form] = Form.useForm();

  const onFinish = useCallback(({ branchArr, ...restValues }) => {
    const [[branchProvince, branchCity], branchName] = branchArr;
    const values = { branchProvince, branchCity, branchName, ...restValues };
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
      className={styles.formWrapper}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      name="common_form_5"
    >
      <Row>
        <Col {...oneColSpan}>
          <Form.Item
            label="结算方式"
            name="settlementCycle"
            extra="T为工作日，D为自然日"
            required
            rules={[
              {
                validator: (rule, value) => {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请选择结算方式"
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Dictionary.Radio data={enumSettlementCycle} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col {...oneColSpan}>
          <Form.Item
            label="结算类型"
            name="bankCardType"
            required
            rules={[
              {
                validator: (rule, value) => {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请选择结算类型";
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Dictionary.Radio data={enumBankCardType} />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col {...oneColSpan}>
          <Form.Item
            label="账户名称"
            name="bankCertName"
            normalize={normalizeNotWhiteSpace}
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator: (rule, value) => {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请输入账户名称"
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Input placeholder="请输入账户名称" allowClear autoComplete="off" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col {...twoColSpan}>
          <Form.Item
            label="银行卡号"
            name="bankCardNo"
            normalize={normalizeNumber}
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator(rule, value) {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请输入银行卡号";
                  } else if (value.length > 30 || value.length < 8) {
                    errMsg = "请输入正确的银行卡号"
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
        </Col>
        <Col {...twoColSpan}>
          <Form.Item
            label="开户银行名称"
            name="bankName"
            normalize={normalizeNotWhiteSpace}
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator: (rule, value) => {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请输入开户银行名称"
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Input placeholder="请输入开户银行名称" allowClear autoComplete="off" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col {...oneColSpan}>
          <Form.Item
            label="开户支行"
            name="branchArr"
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator: (rule, value) => {
                  let errMsg = "";

                  if (value[0].length === 0 && !value[1]) {
                    errMsg = "请填写开户支行名称";
                  } else if (value[0].length === 0) {
                    errMsg = "请选择省/市";
                  } else if (!value[1]) {
                    errMsg = "请输入支行名称";
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <CascaderWithInput
              form={form}
              options={lcnFormPC}
              cascaderProps={{ placeholder: "请选择省/市" }}
              inputProps={{ placeholder: "请输入支行名称" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <div style={{ textAlign: "center" }}>
        <Button type="primary" htmlType="submit" size="large" style={{ padding: "0 40px" }}>提交</Button>
      </div>
    </Form>
  )
}
