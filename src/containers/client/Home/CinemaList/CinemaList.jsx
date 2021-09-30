import React, { Component } from "react";
import CinemaInfo from "./CinemaInfo/CinemaInfo";
import "./CinemaList.scss";
export default class CinemaList extends Component {
  state = {
    isActive: 0,
  };
  render() {
    const { cinemaList } = this.props;
    return (
      <div className="cinemalist py-5">
        <div className="container-fluid">
          <div className="row mx-auto shadow-lg p-3 mb-5 bg-white rounded cinemalist__row">
            <div className="col-1 p-0 m-0">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {cinemaList.map((cinema, idx) => {
                  const { maHeThongRap, logo } = cinema;
                  return (
                    <a
                      className={`nav-link bg-transparent cinemalist__button mb-2 ${
                        (idx === 0 &&
                          "cinemalist__buttonactive" &&
                          idx === 0 &&
                          "") ||
                        (this.state.isActive === idx &&
                          "cinemalist__buttonactive")
                      }`}
                      id={`v-pills-${maHeThongRap}-tab`}
                      data-toggle="pill"
                      href={`#v-pills-${maHeThongRap}`}
                      role="tab"
                      aria-controls={`v-pills-${maHeThongRap}`}
                      aria-selected="true"
                      key={maHeThongRap}
                      onClick={() => this.setState({ isActive: idx })}
                    >
                      <div className="container">
                        <img
                          src={logo}
                          className="rounded-circle"
                          alt=""
                          style={{ width: "60px" }}
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="col-11 m-0">
              <CinemaInfo cinemaList={cinemaList} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
