import React, { Component } from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang bạn tìm không hiện không tồn tại."
        extra={
          <Button type="primary">
            <Link to="/">Back Home</Link>
          </Button>
        }
      />
    );
  }
}
