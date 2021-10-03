import moment from "moment";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CinemaInfo.scss";
export default class CinemaInfo extends Component {
  state = {
    isActive: 0,
  };
  render() {
    const { cinemaList } = this.props;
    return (
      <div className="tab-content w-100 cinemainfo" id="v-pills-cinemaInfo">
        {cinemaList.map((cinemaList, idx) => {
          const { maHeThongRap, lstCumRap } = cinemaList;
          return (
            <div
              className={`tab-pane ${(idx === 0 && "active") || "fade"}`}
              id={`v-pills-${maHeThongRap}`}
              role="tabpanel"
              aria-labelledby={`v-pills-${maHeThongRap}-tab`}
              key={maHeThongRap}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-12 cinemainfo__pills">
                    <div
                      className="nav flex-column nav-pills cinemainfo__addresscinema"
                      id={`v-${maHeThongRap}-tab`}
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      {lstCumRap.map((lstCinema, idx) => {
                        const { maCumRap, tenCumRap, diaChi } = lstCinema;
                        return (
                          <a
                            className={`nav-link bg-transparent mb-2 p-0 cinemainfo__addresscontain ${
                              (idx === 0 &&
                                "cinemainfo__addresscontaintactive" &&
                                idx === 0 &&
                                "") ||
                              (this.state.isActive === idx &&
                                "cinemainfo__addresscontaintactive")
                            } `}
                            id={`v-pills-${maCumRap}-tab`}
                            data-toggle="pill"
                            href={`#v-pills-${maCumRap}`}
                            role="tab"
                            aria-controls={`v-pills-${maCumRap}`}
                            aria-selected="true"
                            onClick={() => this.setState({ isActive: idx })}
                          >
                            <div className="card p-0 m-0 border-0">
                              <div className="row no-gutters">
                                <div className="col-md-2 col-3">
                                  <img
                                    src="https://reviewnao.com/wp-content/uploads/2020/12/galaxy-cinema-galaxy-cinema-ho-chi-minh-city.jpg"
                                    alt="anh-rap-chieu-phim"
                                    className="img-fluid h-100 p-1 w-100 cinemainfo__img"
                                    style={{ objectFit: "cover" }}
                                  />
                                </div>
                                <div className="col-md-10 col-9">
                                  <div className="card-body cinemainfo__addresscontent p-2">
                                    <p className="h5 card-title">{tenCumRap}</p>
                                    <p className="card-text">{diaChi}</p>
                                    <p className="card-text">
                                      <small className="text-muted">
                                        <Link
                                          to={{
                                            pathname: `chitietcumrap/${maCumRap}`,
                                            state: { maHeThongRap },
                                          }}
                                          className="btn btn-secondary mt-2"
                                        >
                                          Chi Tiết
                                        </Link>
                                      </small>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-lg-8 col-12">
                    <div
                      className="tab-content cinemainfo__movie"
                      id="v-pills-cinemaInfo"
                    >
                      {lstCumRap.map((lstCinema, idx) => {
                        const { maCumRap, danhSachPhim } = lstCinema;
                        return (
                          <div
                            className={`tab-pane ${
                              (idx === 0 && "active") || "fade"
                            } cinemainfo__moviecontain`}
                            id={`v-pills-${maCumRap}`}
                            role="tabpanel"
                            aria-labelledby={`v-pills-${maCumRap}-tab`}
                            key={maCumRap}
                          >
                            <div className="row row-cols-md-2 row-cols-1 row-cols-lg-1">
                              {danhSachPhim.map((lstMovie, idx) => {
                                const {
                                  tenPhim,
                                  hinhAnh,
                                  lstLichChieuTheoPhim,
                                  maPhim,
                                } = lstMovie;
                                return (
                                  <div className="col mb-3">
                                    <div className="card mb-3 h-100 w-100 cinemainfo__moviecard">
                                      <div className="row no-gutters h-100">
                                        <div className="col-lg-3 col-6 cinemainfo__moviecontainimg">
                                          <Link
                                            to={`/chitietphim/${maPhim}`}
                                            props={maPhim}
                                            key={maPhim}
                                            onClick={() =>
                                              window.scrollTo(0, 0)
                                            }
                                          >
                                            <img
                                              src={hinhAnh}
                                              alt={maPhim}
                                              className="cinemainfo__movieimg"
                                            />
                                          </Link>
                                        </div>
                                        <div className="col-lg-9 col-6 cinemainfo_moviecontaincontent">
                                          <div className="card-body">
                                            <h5 className="card-title">
                                              {tenPhim}
                                            </h5>
                                            <p className="card-text">
                                              <small className="text-muted">
                                                {lstLichChieuTheoPhim.map(
                                                  (lichChieu, idx) => {
                                                    const { maLichChieu } =
                                                      lichChieu;
                                                    const {
                                                      ngayChieuGioChieu,
                                                    } = lichChieu;
                                                    return (
                                                      <Link
                                                        to={`/chitietphongve/${maLichChieu}`}
                                                        className="btn btn-dark mx-1 my-1"
                                                      >
                                                        {moment(
                                                          ngayChieuGioChieu
                                                        ).format("HH:mm A")}
                                                      </Link>
                                                    );
                                                  }
                                                )}
                                              </small>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
