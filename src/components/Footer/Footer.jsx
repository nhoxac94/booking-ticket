import React, { Component } from "react";
import {
  AndroidOutlined,
  MobileOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "./Footer.scss";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container mx-auto">
          <div className="row text-white py-4 justify-content-between align-self-center">
            <div className="col-lg-4 col-6">
              <p className="h4">123Phim</p>
              <div className="d-flex justify-content-lg-start justify-content-center ">
                <div className="footer__faq">
                  <ul>
                    <li>FAQ</li>
                    <li>Brand Guidelines</li>
                  </ul>
                </div>
                <div className="footer__license">
                  <ul>
                    <li>Thoả thuận sử dụng</li>
                    <li>Quy chế hoạt động</li>
                    <li>Chính sách bảo mật</li>
                    <li>Quyền lợi thành viên</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <p className="h4">Đối tác</p>
              <div className="container">
                <div className="row flex-wrap footer__collab">
                  <div className="col">
                    <div className="d-flex justify-content-center justify-content-lg-start ">
                      <img
                        src="https://picsum.photos/id/1/50/50"
                        alt=""
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <p className="h4">Mobile App</p>
              <div className="d-flex justify-content-lg-start justify-content-center">
                <AndroidOutlined style={{ fontSize: "2rem" }} />
                <MobileOutlined style={{ fontSize: "2rem" }} />
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <p className="h4">Social</p>
              <div className="d-flex justify-content-lg-start justify-content-center">
                <FacebookOutlined style={{ fontSize: "2rem" }} />
                <InstagramOutlined style={{ fontSize: "2rem" }} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
