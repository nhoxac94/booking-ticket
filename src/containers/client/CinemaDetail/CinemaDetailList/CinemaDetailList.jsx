import React, { Component } from "react";

export default class CinemaDetailList extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-3">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                API Các Cụm Rạp
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                API Các Cụm Rạp
              </a>
              <a
                className="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                API Các Cụm Rạp
              </a>
              <a
                className="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                API Các Cụm Rạp
              </a>
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col">Thứ 2</div>
                    <div className="col">Thứ 3</div>
                    <div className="col">Thứ 4</div>
                    <div className="col">Thứ 5</div>
                    <div className="col">Thứ 6</div>
                    <div className="col">Thứ 7</div>
                    <div className="col">Chủ Nhật</div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col">Thứ 2</div>
                    <div className="col">Thứ 3</div>
                    <div className="col">Thứ 4</div>
                    <div className="col">Thứ 5</div>
                    <div className="col">Thứ 6</div>
                    <div className="col">Thứ 7</div>
                    <div className="col">Chủ Nhật</div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col">Thứ 2</div>
                    <div className="col">Thứ 3</div>
                    <div className="col">Thứ 4</div>
                    <div className="col">Thứ 5</div>
                    <div className="col">Thứ 6</div>
                    <div className="col">Thứ 7</div>
                    <div className="col">Chủ Nhật</div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col">Thứ 2</div>
                    <div className="col">Thứ 3</div>
                    <div className="col">Thứ 4</div>
                    <div className="col">Thứ 5</div>
                    <div className="col">Thứ 6</div>
                    <div className="col">Thứ 7</div>
                    <div className="col">Chủ Nhật</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
