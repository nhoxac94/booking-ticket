import React, { Component } from "react";
import CinemaInfo from "./CinemaInfo/CinemaInfo";
export default class CinemaList extends Component {
  render() {
    const { cinemaList } = this.props;
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-1">
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
                    className="nav-link pb-4"
                    id={`v-pills-${maHeThongRap}-tab`}
                    data-toggle="pill"
                    href={`#v-pills-${maHeThongRap}`}
                    role="tab"
                    aria-controls={`v-pills-${maHeThongRap}`}
                    aria-selected="true"
                    key={maHeThongRap}
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
          <div className="col-11">
            <div className="tab-content ml-5" id="v-pills-tabContent">
              <CinemaInfo cinemaList={cinemaList} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
