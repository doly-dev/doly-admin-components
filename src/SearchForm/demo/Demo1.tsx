/**
 * title: 提交记录查询
 * desc: 依赖了通用组件 `Dictionary`，请自行拷贝到项目中引入。
 *  
 */

import React, { useCallback, useEffect } from "react";
import { Card, Form, Row, Col, Input, Button, DatePicker } from "antd";
import moment from "moment";
import Dictionary from "../../Dictionary";

const { RangePicker } = DatePicker;

// 审核状态字典，尽量在 src/constants 中维护。
const enumApproveResult = [
  {
    name: "待审核",
    value: 1
  },
  {
    name: "审核通过",
    value: 2
  },
  {
    name: "审核拒绝",
    value: 3
  },
];

// 禁止选择超过当天
function disabledDate(current) {
  // Can not select days before today and today
  return current && current > moment().endOf("day");
}

const colLayout = {
  xl: 8,
  lg: 12,
  xs: 24
};

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
};

const buttonItemLayout = {
  xl: {
    span: 8,
    offset: 16
  },
  lg: {
    span: 12,
    offset: 12
  },
  xs: {
    span: 24,
    offset: 0
  }
}

// 默认日期格式
const defaultDateFormat = "YYYY-MM-DD";

// 初始值
const initialValues = {
  code: "", // 申请编号
  approverName: "", // 审核人姓名
  approveResult: "", // 审核结果
  // applyStartTime: "2020-03-10 15:30:06", // 申请开始时间
  // applyEndTime: "2020-03-10 15:34:06", // 申请结束时间
  applyTime: [],
  // approveStartTime: "2020-03-10 15:30:22", // 审核开始时间
  // approveEndTime: "2020-03-10 15:34:22", // 审核结束时间
  approveTime: []
};

interface CompProps {
  onSubmit?: (value: any) => void;
  name?: string;
  submitOnMount?: boolean;
  loading?: boolean;
  defaultValues?: any;
}

export default ({ onSubmit = () => { }, name = "apply", submitOnMount = false, loading = false, defaultValues = {} }: CompProps) => {
  const [form] = Form.useForm();

  const onFinish = useCallback(({ applyTime, approveTime, ...restValues }) => {
    const ret = { ...restValues };

    if (applyTime && applyTime.length > 0) {
      ret.applyStartTime = `${applyTime[0].format(defaultDateFormat)} 00:00:00`;
      ret.applyEndTime = `${applyTime[1].format(defaultDateFormat)} 23:59:59`;
    }

    if (approveTime && approveTime.length > 0) {
      ret.approveStartTime = `${approveTime[0].format(defaultDateFormat)} 00:00:00`;
      ret.approveEndTime = `${approveTime[1].format(defaultDateFormat)} 23:59:59`;
    }

    onSubmit(ret);
  }, [onSubmit]);

  // 重置表单再提交
  const handleReset = useCallback(() => {
    form.resetFields();
    form.submit();
  }, [form]);

  // 初次加载提交
  useEffect(() => {
    if (defaultValues) {
      const { applyStartTime, applyEndTime, approveStartTime, approveEndTime, ...restDefaultValues } = defaultValues;
      const retValues = {
        ...restDefaultValues
      };
      if (applyStartTime && applyEndTime) {
        retValues.applyTime = [
          moment(applyStartTime),
          moment(applyEndTime)
        ];
      }
      if (applyStartTime && applyEndTime) {
        retValues.approveTime = [
          moment(approveStartTime),
          moment(approveEndTime)
        ];
      }
      form.setFieldsValue(retValues);
    }

    if (submitOnMount) {
      form.submit();
    }
  }, []);

  return (
    <Card style={{ paddingTop: 24 }}>
      <Form
        {...formItemLayout}
        name={name}
        form={form}
        initialValues={initialValues}
        onFinish={onFinish}
      >
        <Row>
          <Col {...colLayout}>
            <Form.Item label="申请编号" name="applyCode">
              <Input allowClear placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item label="提交时间" name="applyTime">
              <RangePicker disabledDate={disabledDate} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item label="审核员" name="approverName">
              <Input allowClear placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item label="审核时间" name="approveTime">
              <RangePicker disabledDate={disabledDate} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item label="审核状态" name="approveResult">
              <Dictionary.Select data={enumApproveResult} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col {...buttonItemLayout} style={{ textAlign: "right" }}>
            <Row>
              <Col xs={24} sm={22}>
                <Button type="primary" htmlType="submit" loading={loading}>
                  查询
                </Button>
                <Button
                  htmlType="button"
                  style={{ marginLeft: 15 }}
                  onClick={handleReset}
                  disabled={loading}
                >
                  重置
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
