/**
 * title: Form 中使用 Radio
 */

import React, { useState, useCallback } from "react";
import { Form, Button } from "antd";
import Dictionary from "..";

const enumSchool = [
  {
    value: '0',
    name: '小学'
  },
  {
    value: '1',
    name: '初中'
  },
  {
    value: '2',
    name: '高中'
  },
  {
    value: '3',
    name: '大学',
    disabled: true
  },
];

const formItemLayouts = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
}

const buttonItemLayouts = {
  wrapperCol: { span: 16, offset: 6 }
}

const initialValues = { school: enumSchool[0].value };

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
        name="radio_1"
      >
        <Form.Item label="学校" name="school">
          <Dictionary.Radio data={enumSchool} />
        </Form.Item>
        <Form.Item {...buttonItemLayouts}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
      <br />
      <div>form values: {JSON.stringify(result)}</div>
    </>
  )
}
