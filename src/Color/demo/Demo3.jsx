/**
 * title: antd Form 中使用
 */

import React, { useState, useCallback } from "react";
import { Form, Button } from "antd";
import Color from "..";

const formItemLayouts = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
}

const buttonItemLayouts = {
  wrapperCol: { span: 16, offset: 6 }
}

const initialValues = {
  bgColor: "#e60000"
}

export default () => {
  const [result, setResult] = useState(initialValues);
  const onFinish = useCallback(values => {
    setResult(values);
  }, []);

  return (
    <>
      <Form
        {...formItemLayouts}
        initialValues={initialValues}
        onFinish={onFinish}
      >
        <Form.Item label="背景颜色" name="bgColor">
          <Color.BlockPicker />
        </Form.Item>
        <Form.Item {...buttonItemLayouts}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
      <br/>
      <div>form values: {JSON.stringify(result)}</div>
    </>
  )
}