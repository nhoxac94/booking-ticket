import React, { Component } from "react";

export default class CinemaList extends Component {
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
                <div className="container">
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="https://picsum.photos/id/1/50/50"
                        className="rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="col-10">API Các Cụm Rạp</div>
                  </div>
                </div>
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
                <div className="container">
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="https://picsum.photos/id/1/50/50"
                        className="rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="col-10">API Các Cụm Rạp</div>
                  </div>
                </div>
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
                <div className="container">
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="https://picsum.photos/id/1/50/50"
                        className="rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="col-10">API Các Cụm Rạp</div>
                  </div>
                </div>
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
                <div className="container">
                  <div className="row">
                    <div className="col-2">
                      <img
                        src="https://picsum.photos/id/1/50/50"
                        className="rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="col-10">API Các Cụm Rạp</div>
                  </div>
                </div>
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
                API Các Suất Chiếu
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                API Các Suất Chiếu
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                API Các Suất Chiếu
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                API Các Suất Chiếu
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
