import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CinemaInfo extends Component {
  render() {
    const { cinemaList } = this.props;
    return (
      <>
        {cinemaList.map((cinemaList, idx) => {
          const { maHeThongRap, lstCumRap } = cinemaList;
          return (
            <div
              className="tab-pane fade"
              id={`v-pills-${maHeThongRap}`}
              role="tabpanel"
              aria-labelledby={`v-pills-${maHeThongRap}-tab`}
              key={maHeThongRap}
            >
              <div className="row">
                <div className="col-3">
                  <div
                    className="nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {lstCumRap.map((lstCinema, idx) => {
                      const { maCumRap, tenCumRap, diaChi } = lstCinema;
                      return (
                        <a
                          className="nav-link mb-4"
                          id={`v-pills-${maCumRap}-tab`}
                          data-toggle="pill"
                          href={`#v-pills-${maCumRap}`}
                          role="tab"
                          aria-controls={`v-pills-${maCumRap}`}
                          aria-selected="true"
                        >
                          {tenCumRap}
                          <br />
                          <p>{diaChi}</p>
                          <br />
                          <Link
                            to={{
                              pathname: `chitietcumrap/${maCumRap}`,
                              state: { maHeThongRap },
                            }}
                            className="btn btn-secondary"
                          >
                            Chi Tiết
                          </Link>
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="col-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    {lstCumRap.map((lstCinema, idx) => {
                      const { maCumRap, danhSachPhim } = lstCinema;
                      return (
                        <div
                          className="tab-pane fade"
                          id={`v-pills-${maCumRap}`}
                          role="tabpanel"
                          aria-labelledby={`v-pills-${maCumRap}-tab`}
                          key={maCumRap}
                        >
                          {danhSachPhim.map((lstMovie, idx) => {
                            const { tenPhim, hinhAnh, lstLichChieuTheoPhim } =
                              lstMovie;
                            return (
                              <div className="card mb-3 w-100">
                                <div className="row no-gutters">
                                  <div className="col-md-1">
                                    <img
                                      src={hinhAnh}
                                      alt="..."
                                      className="img-fluid h-100 w-100"
                                      style={{
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                  <div className="col-md-11">
                                    <div className="card-body">
                                      <h5 className="card-title">{tenPhim}</h5>
                                      <p className="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                      </p>
                                      <p className="card-text">
                                        <small className="text-muted">
                                          {lstLichChieuTheoPhim
                                            .slice(0, 4)
                                            .map((lichChieu, idx) => {
                                              const { ngayChieuGioChieu } =
                                                lichChieu;
                                              return (
                                                <button className="btn btn-dark mx-1 my-1">
                                                  {new Date(
                                                    ngayChieuGioChieu
                                                  ).toLocaleTimeString()}
                                                </button>
                                              );
                                            })}
                                        </small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
