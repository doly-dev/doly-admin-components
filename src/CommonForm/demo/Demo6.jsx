/**
 * title: 返佣信息
 * desc: 注意 `InputNumber` 返回的是 `number` 类型
 */
import React, { useCallback } from "react";
import { Form, Button, Row, Col, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

import Dictionary from "../../Dictionary";
import InputNumber from "../../InputNumber";
import styles from "./style.less";

// 下面的枚举值请在单独文件维护
// 返佣周期
// 0-日结 1-月结 2-季结
export const enumRakebackeCycle = [
  {
    value: "0",
    name: "日返"
  },
  {
    value: "1",
    name: "月返"
  },
  {
    value: '2',
    name: '季返'
  },
];

const oneColSpan = {
  span: 24
};
const threeColSpan = {
  span: 24,
  lg: 12,
  xl: 8
};
const initialValues = {
  rakebackeCycle: "",
  costpriceCp: "",
  costpriceCpMaxFee: "",
  costpriceCpCredit: "",
  costpriceIC: "",
  costpriceAlipay: "",
  costpriceWechat: "",
  costpriceUionpay: "",
  settlementFee: "",
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
      className={styles.formWrapper}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      name="common_form_6"
    >
      <Row>
        <Col {...oneColSpan}>
          <Form.Item
            label="返佣周期"
            name="rakebackeCycle"
            required
            rules={[
              {
                validator: (rule, value) => {
                  let errMsg = "";
                  if (!value) {
                    errMsg = "请选择返佣周期";
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Dictionary.Radio data={enumRakebackeCycle} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col {...oneColSpan}>
          <Form.Item label="普通刷卡" colon={false}>
            <Row>
              <Col {...threeColSpan}>
                <Form.Item
                  label="借记卡"
                  name="costpriceCp"
                  validateTrigger="onBlur"
                  required
                  rules={[
                    {
                      validator: (rule, value) => {
                        let errMsg = "";
                        if (!value) {
                          errMsg = "请输入借记卡费率";
                        } else if (value <= 0 || value >= 100) {
                          errMsg = "须大于0，小于100";
                        }
                        if (errMsg) {
                          return Promise.reject(errMsg);
                        }
                        return Promise.resolve();
                      }
                    }
                  ]}
                >
                  <InputNumber placeholder="请输入" after="%" precision={2} />
                </Form.Item>
              </Col>
              <Col {...threeColSpan}>
                <Form.Item
                  label="借记卡封顶"
                  name="costpriceCpMaxFee"
                  validateTrigger="onBlur"
                  required
                  rules={[
                    {
                      validator: (rule, value) => {
                        let errMsg = "";
                        if (!value) {
                          errMsg = "请输入借记卡封顶";
                        } else if (value <= 0) {
                          errMsg = "须大于0";
                        }
                        if (errMsg) {
                          return Promise.reject(errMsg);
                        }
                        return Promise.resolve();
                      }
                    }
                  ]}
                >
                  <InputNumber placeholder="请输入" after="元" precision={2} />
                </Form.Item>
              </Col>
              <Col {...threeColSpan}>
                <Form.Item
                  label="贷记卡"
                  name="costpriceCpCredit"
                  validateTrigger="onBlur"
                  required
                  rules={[
                    {
                      validator: (rule, value) => {
                        let errMsg = "";
                        if (!value) {
                          errMsg = "请输入贷记卡费率";
                        } else if (value <= 0 || value >= 100) {
                          errMsg = "须大于0，小于100";
                        }
                        if (errMsg) {
                          return Promise.reject(errMsg);
                        }
                        return Promise.resolve();
                      }
                    }
                  ]}
                >
                  <InputNumber placeholder="请输入" after="%" precision={2} />
                </Form.Item>
              </Col>
              <Col {...threeColSpan}>
                <Form.Item
                  label={
                    <span>
                      IC卡小额&nbsp;
                            <Tooltip title="IC卡小额双免优惠费率">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </span>
                  }
                  name="costpriceIC"
                  validateTrigger="onBlur"
                  rules={[
                    {
                      validator: (rule, value) => {
                        let errMsg = "";
                        if (!value) {
                          errMsg = "请输入IC卡小额双免优惠费率";
                        } else if (value <= 0 || value >= 100) {
                          errMsg = "须大于0，小于100";
                        }
                        if (errMsg) {
                          return Promise.reject(errMsg);
                        }
                        return Promise.resolve();
                      }
                    }
                  ]}
                >
                  <InputNumber placeholder="请输入" after="%" precision={2} />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col {...oneColSpan}>
          <Form.Item label="扫码支付" colon={false} >
            <Row>
              <Col {...threeColSpan}>
                <Form.Item
                  label="支付宝"
                  name="costpriceAlipay"
                  validateTrigger="onBlur"
                  required
                  rules={[
                    {
                      validator: (rule, value) => {
                        let errMsg = "";
                        if (!value) {
                          errMsg = "请输入支付宝费率";
                        } else if (value <= 0 || value >= 100) {
                          errMsg = "须大于0，小于100";
                        }
                        if (errMsg) {
                          return Promise.reject(errMsg);
                        }
                        return Promise.resolve();
                      }
                    }
                  ]}
                >
                  <InputNumber placeholder="请输入" after="%" precision={2} />
                </Form.Item>
              </Col>
              <Col {...threeColSpan}>
                <Form.Item
                  label="微信"
                  name="costpriceWechat"
                  validateTrigger="onBlur"
                  required
                  rules={[
                    {
                      validator: (rule, value) => {
                        let errMsg = "";
                        if (!value) {
                          errMsg = "请输入微信费率";
                        } else if (value <= 0 || value >= 100) {
                          errMsg = "须大于0，小于100";
                        }
                        if (errMsg) {
                          return Promise.reject(errMsg);
                        }
                        return Promise.resolve();
                      }
                    }
                  ]}
                >
                  <InputNumber placeholder="请输入" after="%" precision={2} />
                </Form.Item>
              </Col>
              <Col {...threeColSpan}>
                <Form.Item
                  label={
                    <span>
                      银二小额&nbsp;
                            <Tooltip title="银联二维码小额优惠费率">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </span>
                  }
                  name="costpriceUionpay"
                  validateTrigger="onBlur"
                  rules={[
                    {
                      validator: (rule, value) => {
                        let errMsg = "";
                        if (!value) {
                          errMsg = "请输入银联二维码小额优惠费率";
                        } else if (value <= 0 || value >= 100) {
                          errMsg = "须大于0，小于100";
                        }
                        if (errMsg) {
                          return Promise.reject(errMsg);
                        }
                        return Promise.resolve();
                      }
                    }
                  ]}
                >
                  <InputNumber placeholder="请输入" after="%" precision={2} />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col {...oneColSpan}>
          <Form.Item label="结算" colon={false}>
            <Row>
              <Col {...threeColSpan}>
                <Form.Item
                  label="结算手续费"
                  name="settlementFee"
                  validateTrigger="onBlur"
                  required
                  rules={[
                    {
                      validator: (rule, value) => {
                        let errMsg = "";
                        if (!value) {
                          errMsg = "请输入结算手续费";
                        } else if (value < 0) {
                          errMsg = "须大于等于0";
                        }
                        if (errMsg) {
                          return Promise.reject(errMsg);
                        }
                        return Promise.resolve();
                      }
                    }
                  ]}
                >
                  <InputNumber placeholder="请输入" after="元/笔" precision={2} />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </Col>
      </Row>
      <div style={{ textAlign: "center" }}>
        <Button type="primary" htmlType="submit" size="large" style={{ padding: "0 40px" }}>提交</Button>
      </div>
    </Form>
  )
}
