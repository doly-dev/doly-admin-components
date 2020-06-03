/**
 * title: 企业信息
 * desc: |
 *    由于存在单行和多行表单，需设置 `label` 宽度。
 * 
 *    这里的 `地址库` 仅用于示例演示。
 */
import React, { useCallback } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { isMobile, isIdCard, isSocialCreditCode, isBusinessLicense } from "util-helpers";
import lcnForm from "lcn/lcn-form";

import CascaderWithInput from "../../CascaderWithInput";
import styles from "./style.less";

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
  companyName: "",
  businessRegno: "",
  legalName: "",
  legalIdCard: "",
  legalMobile: "",
  addressArr: [[], ""], // [[province, city, district], address]
  // province: "",
  // city: "",
  // district: "",
  // address: "",
}

export default () => {
  const [form] = Form.useForm();

  const onFinish = useCallback(({ addressArr, ...restValues }) => {
    const [[province, city, district], address] = addressArr;
    const values = { province, city, district, address, ...restValues };
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
      name="common_form_4"
    >
      <Row>
        <Col {...oneColSpan}>
          <Form.Item
            label="公司名称"
            name="companyName"
            normalize={removeWhiteSpace}
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator: (rule, value) => {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请输入公司名称";
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Input placeholder="请输入公司营业执照上的商户全称" allowClear autoComplete="off" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col {...twoColSpan}>
          <Form.Item
            label="营业执照号"
            name="businessRegno"
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator: (rule, value) => {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请输入公司统一社会信用代码或营业执照号"
                  } else if (
                    !isSocialCreditCode(value) &&
                    !isBusinessLicense(value)
                  ) {
                    errMsg = "格式错误";
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Input placeholder="请输入公司统一社会信用代码或营业执照号" allowClear autoComplete="off" />
          </Form.Item>
        </Col>
        <Col {...twoColSpan}>
          <Form.Item
            label="法人姓名"
            name="legalName"
            normalize={removeWhiteSpace}
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator: (rule, value) => {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请输入法人姓名";
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Input placeholder="请输入法人姓名" allowClear autoComplete="off" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col {...twoColSpan}>
          <Form.Item
            label="法人身份证号"
            name="legalIdCard"
            normalize={removeWhiteSpace}
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator(rule, value) {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请输入法人身份证号";
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
            <Input placeholder="请输入法人身份证号" allowClear autoComplete="off" />
          </Form.Item>
        </Col>
        <Col {...twoColSpan}>
          <Form.Item
            label="法人手机号"
            name="legalMobile"
            normalize={removeWhiteSpace}
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator(rule, value) {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请输入法人手机号";
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
            <Input placeholder="请输入法人手机号" allowClear autoComplete="off" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col {...oneColSpan}>
          <Form.Item
            label="公司地址"
            name="addressArr"
            validateTrigger="onBlur"
            required
            rules={[
              {
                validator: (rule, value) => {
                  let errMsg = "";

                  if (value[0].length === 0 && value[1] === "") {
                    errMsg = "请填写公司地址";
                  } else if (value[0].length === 0) {
                    errMsg = "请选择省/市/区";
                  } else if (!value[1]) {
                    errMsg = "请输入详细地址";
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
              options={lcnForm}
              cascaderProps={{ placeholder: "请选择省/市/区" }}
              inputProps={{ placeholder: "请输入详细地址" }}
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
