import React, { Component } from "react";

export default class CinemaList extends Component {
  renderCinema() {
    const { cinemaList } = this.props;
    return (
      <a
        className="nav-link active"
        id="v-pills-home-tab"
        data-toggle="pill"
        href="#v-pills-home"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 mx-0 px-0">
              <img
                src="https://picsum.photos/id/1/50/50"
                className="rounded-circle"
                alt=""
              />
            </div>
            <div className="col-10 mx-0 px-0 pl-5">API Các Cụm Rạp</div>
          </div>
        </div>
      </a>
    );
  }
  render() {
    const { cinemaList } = this.props;
    console.log(cinemaList);
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
              {cinemaList.map((cinema, idx) => {
                const { lstCumRap, maHeThongRap, tenHeThongRap, logo } = cinema;
                return (
                  <a
                    className="nav-link pb-4"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                    key={maHeThongRap}
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-2 my-auto">
                          <img
                            src={logo}
                            className="rounded-circle img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-10 mx-0 pl-5">{tenHeThongRap}</div>
                      </div>
                    </div>
                  </a>
                );
              })}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
