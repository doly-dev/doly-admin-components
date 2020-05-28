import React from "react";
import { Form, Row, Col } from "antd";
import InputNumber from "..";

const twoColSpan = {
  span: 24,
  md: 12,
  xl: 8
};

export default () => {
  return (
    <Form>
      <Row>
        <Col {...twoColSpan}>
          <Form.Item
            label="支付宝费率"
            name="alipayFee"
            rules={[
              {
                required: true,
                message: "请输入支付宝费率"
              }
            ]}
          >
            <InputNumber placeholder="须大于1，小于10" precision={2} min={1} max={10} after="%" />
          </Form.Item>
        </Col>
        <Col {...twoColSpan}>
          <Form.Item
            label="封顶金额"
            name="maxFee"
            rules={[
              {
                required: true,
                message: "请输入封顶金额"
              }
            ]}
          >
            <InputNumber placeholder="请输入" precision={2} min={1} max={100} after="元/笔" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}