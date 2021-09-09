import React, { Component } from "react";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
} from "antd";

export default class AddMovie extends Component {
  state = {
    componentSize: "default",
    setComponentSize: "default",
  };

  onFormLayoutChange = ({ size }) => {
    this.setState({
      setComponentSize: size,
    });
  };
  render() {
    console.log(this.state.setComponentSize);
    return (
      <>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: this.state.componentSize,
          }}
          onValuesChange={this.onFormLayoutChange}
          size={this.state.setComponentSize}
        >
          <Form.Item label="Kích thước Form" name="size">
            <Radio.Group>
              <Radio.Button value="small">Nhỏ</Radio.Button>
              <Radio.Button value="default">Mặc định</Radio.Button>
              <Radio.Button value="large">Lớn</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Tên Phim">
            <Input />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Ngày khởi chiếu">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Tình trạng">
            <Cascader
              options={[
                {
                  value: "showing",
                  label: "Đang chiếu",
                },
                {
                  value: "comingsoon",
                  label: "Sắp chiếu",
                },
                {
                  value: "trending",
                  label: "Hot",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Đánh giá">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Hình ảnh">
            <Button>File...</Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
