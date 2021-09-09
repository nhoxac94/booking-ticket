import React, { Component } from "react";
import {
  SearchOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import "./MovieManager.scss";
import Button from "components/Button/Button";
import AddMovie from "./AddMovie/AddMovie";
export default class MovieManager extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active btn btn-light"
              id="pills-moviemanager-tab"
              data-toggle="pill"
              href="#pills-moviemanager"
              role="tab"
              aria-controls="pills-moviemanager"
              aria-selected="true"
            >
              Quản lý phim
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link btn btn btn-light ml-2"
              id="pills-addmovie-tab"
              data-toggle="pill"
              href="#pills-addmovie"
              role="tab"
              aria-controls="pills-addmovie"
              aria-selected="false"
            >
              Thêm phim
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-moviemanager"
            role="tabpanel"
            aria-labelledby="pills-moviemanager-tab"
          >
            <div className="py-3">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập vào tên phim hoặc mã số phim"
                  aria-label="Nhập vào tên phim hoặc mã số phim"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    <SearchOutlined className="moviemanager__icon" />
                  </button>
                </div>
              </div>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Mã Phim</th>
                    <th scope="col">Hình Ảnh</th>
                    <th scope="col">Tên phim</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <img
                        src="https://picsum.photos/id/237/150/150"
                        alt="pic"
                      />
                    </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <div style={{ display: "inline" }} className="mr-2">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <EditOutlined />
                        </button>
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex={-1}
                          aria-labelledby="modalDetailMovie"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="modalDetailMovie"
                                >
                                  Thông tin lịch chiếu phim (Tên Phim)
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                              <div className="modal-body py-5">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-6">
                                      <div className="dropdown">
                                        <button
                                          className="btn btn-white dropdown-toggle"
                                          type="button"
                                          id="dropdownMenuButton"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          Chọn hệ thống rạp
                                        </button>
                                        <div
                                          className="dropdown-menu"
                                          aria-labelledby="dropdownMenuButton"
                                        >
                                          <a className="dropdown-item" href="#">
                                            Action
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Another action
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Something else here
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      Chọn ngày/giờ/năm chiếu:
                                    </div>
                                    <div className="col-6">
                                      <div className="dropdown">
                                        <button
                                          className="btn btn-white dropdown-toggle"
                                          type="button"
                                          id="dropdownMenuButton"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          Chọn cụm rạp
                                        </button>
                                        <div
                                          className="dropdown-menu"
                                          aria-labelledby="dropdownMenuButton"
                                        >
                                          <a className="dropdown-item" href="#">
                                            Action
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Another action
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Something else here
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      Chọn thời lượng phim
                                    </div>
                                    <div className="col-6">
                                      <div className="dropdown">
                                        <button
                                          className="btn btn-white dropdown-toggle"
                                          type="button"
                                          id="dropdownMenuButton"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          Chọn rạp
                                        </button>
                                        <div
                                          className="dropdown-menu"
                                          aria-labelledby="dropdownMenuButton"
                                        >
                                          <a className="dropdown-item" href="#">
                                            Action
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Another action
                                          </a>
                                          <a className="dropdown-item" href="#">
                                            Something else here
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      Mã nhóm mặc định
                                    </div>
                                    <div className="col-12">Giá vé:</div>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Lưu thay đổi
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Đóng
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button styling={"btn-danger"}>
                        <DeleteOutlined />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-addmovie"
            role="tabpanel"
            aria-labelledby="pills-addmovie-tab"
          >
            <AddMovie />
          </div>
        </div>
      </div>
    );
  }
}
