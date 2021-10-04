import React, { Component } from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";
export default class PageNotFound extends Component {
  render() {
    return (
      <div className="pagenotfound">
        <Result
          status="404"
          title="404"
          subTitle="Xin lỗi, trang bạn tìm không hiện không tồn tại."
          extra={
            <Button type="primary">
              <Link to="/">Trở về Trang Chủ</Link>
            </Button>
          }
        />
      </div>
    );
  }
}
