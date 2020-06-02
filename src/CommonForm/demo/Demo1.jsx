import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";

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
  userName: "",
  mobile: "",
  password: "",
  
}

export default () => {
  const onFinish = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <Form
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={initialValues}
      name="common_form_1"
    >
      <Form.Item
        label="用户名"
        name="userName"
        rules={[
          {
            required: true,
            message: "请输入用户名"
          }
        ]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>
    </Form>
  )
}
