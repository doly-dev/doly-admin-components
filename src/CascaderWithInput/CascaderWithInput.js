import React, { useRef, useCallback } from "react";
import { Row, Col, Input, Cascader } from "antd";

const fieldNameDivide = "_";

export default ({
  id = "",
  options = [],
  value = [[], ""],
  onChange = () => {},
  onBlur = false, // 表示 validateTrigger 设置为 onBlur
  form = null,
  cascaderProps = {},
  inputProps = {}
}) => {
  const inputRef = useRef(null);
  const cascaderValue = value[0];
  const inputValue = value[1];

  // 表单blur校验
  const validateForBlur = useCallback(() => {
    if (onBlur && form && form.validateFields) {
      let fieldNamePath = id;
      // fix：form设置了name，导致验证失效
      // eslint-disable-next-line no-underscore-dangle
      if (form.__INTERNAL__ && form.__INTERNAL__.name) {
        fieldNamePath = fieldNamePath.replace(
          // eslint-disable-next-line no-underscore-dangle
          `${form.__INTERNAL__.name}${fieldNameDivide}`,
          ""
        );
      }
      form.validateFields([fieldNamePath.split(fieldNameDivide)]);
    }
  }, []);

  const onInputChange = e => {
    const val = e.target.value.replace(/\s/g, "");
    onChange([cascaderValue, val]);
  };

  const onCascaderChange = val => {
    onChange([val, inputValue]);

    // 表单blur校验
    if (onBlur && form && form.validateFields) {
      // 判断选择框是否有值，没有的话自动获取输入框焦点，否则校验表单
      if (val.length > 0 && !inputValue) {
        inputRef.current.focus();
      } else {
        validateForBlur();
      }
    }
  };

  return (
    <Row gutter={10} id={id}>
      <Col span={24} md={12} lg={7}>
        <Cascader
          placeholder="请选择"
          {...cascaderProps}
          style={{ width: "100%", ...cascaderProps.style }}
          options={options}
          value={cascaderValue}
          onChange={onCascaderChange}
        />
      </Col>
      <Col span={24} md={12} lg={17}>
        <Input
          placeholder="请输入"
          autoComplete="off"
          allowClear
          {...inputProps}
          value={inputValue}
          onChange={onInputChange}
          onBlur={validateForBlur}
          ref={inputRef}
        />
      </Col>
    </Row>
  );
};
