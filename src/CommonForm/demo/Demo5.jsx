import React, { useCallback } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import lcnPCForm from "lcn/lcn_pc-form";
import { CardBin } from "bankcard";

import Dictionary from "../../Dictionary";
import CascaderWithInput from "../../CascaderWithInput";
import styles from "./style.less";

const bc = new CardBin();

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

// 去掉空格
function removeWhiteSpace(val) {
  if (typeof val === "string") {
    return val.replace(/\s/g, "");
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
    const values = {branchProvince, branchCity, branchName, ...restValues};
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
            normalize={removeWhiteSpace}
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
            normalize={removeWhiteSpace}
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator(rule, value) {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请输入银行卡号";
                  } else {
                    const validateResult = bc.validateCardInfo(value).validated;
                    if (!validateResult.validated) {
                      errMsg = validateResult.message;
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
            <Input placeholder="请输入银行卡号" allowClear autoComplete="off" />
          </Form.Item>
        </Col>
        <Col {...twoColSpan}>
          <Form.Item
            label="开户银行名称"
            name="bankName"
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

                  if (value[0].length === 0 && value[1] === "") {
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
              options={lcnPCForm}
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
