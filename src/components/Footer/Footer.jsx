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
        <div className="container-fluid">
          <div className="w-75 mx-auto">
            <div className="row text-white py-4">
              <div className="col-4">
                <p className="h4">123Phim</p>
                <div className="d-flex justify-content-start">
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
              <div className="col-4">
                <p className="h4">Đối tác</p>
                <div className="d-flex justify-content-start align-items-center flex-wrap footer__collab">
                  <img
                    src="https://picsum.photos/id/1/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/2/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/3/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/4/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/5/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/6/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/7/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/8/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/9/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/10/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/11/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/12/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/13/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/14/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/15/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/16/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/17/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/18/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                  <img
                    src="https://picsum.photos/id/19/50/50"
                    alt=""
                    className="rounded-circle"
                  />
                </div>
              </div>
              <div className="col-2">
                <p className="h4">Mobile App</p>
                <div className="d-flex justify-content-start">
                  <AndroidOutlined style={{ fontSize: "4rem" }} />
                  <MobileOutlined style={{ fontSize: "4rem" }} />
                </div>
              </div>
              <div className="col-2">
                <p className="h4">Social</p>
                <div className="d-flex justify-content-start">
                  <FacebookOutlined style={{ fontSize: "4rem" }} />
                  <InstagramOutlined style={{ fontSize: "4rem" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
