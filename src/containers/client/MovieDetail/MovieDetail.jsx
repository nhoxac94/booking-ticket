import Loader from "components/Loader/Loader";
import moment from "moment";
import React, { Component } from "react";
import "./MovieDetail.scss";
import "antd/dist/antd.css";
import { Rate } from "antd";
import movieApi from "apis/movieApi";
import { Link } from "react-router-dom";

export default class MovieDetail extends Component {
  state = {
    movie: [],
    loading: true,
  };

  componentDidMount() {
    const { maPhim } = this.props.match.params;
    movieApi
      .fetchMovieDetail(maPhim)
      .then((res) => {
        this.setState({
          movie: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loader />;
    return (
      <div
        style={{
          backgroundImage: `url(${movie.hinhAnh})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div style={{ backdropFilter: "blur(15px)" }}>
          <div className="container">
            <div className="movieDetail py-5">
              <div className="header__movieDetail"></div>
              <div className="row">
                <div className="col-3">
                  <img src={movie.hinhAnh} alt="" width="100%" />
                </div>
                <div className="col-4">
                  <h3 className="mb-4">{movie.tenPhim}</h3>
                  <p className>{movie.moTa}</p>
                </div>
                <div className="col-5">
                  <div
                    className={`c100  big green ml-4 mt-4 p${
                      movie.danhGia * 10
                    }`}
                  >
                    <span>{movie.danhGia}/10</span>
                    <div className="slice">
                      <div className="bar"></div>
                      <div className="fill"></div>
                    </div>
                  </div>
                  <div
                    className="rate"
                    style={{ position: "absolute", bottom: "45%", left: "10%" }}
                  >
                    <Rate allowHalf value={movie.danhGia / 2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="theaterDetail bg-light">
              <div className="row">
                <div className="col-4">
                  <div className="nav flex-column nav-tabs">
                    {movie.heThongRapChieu.map((heThongRap, index) => {
                      return (
                        <span
                          className={`nav-link mb-3 ${index === 0 && "active"}`}
                          key={heThongRap.maHeThongRap}
                          data-toggle="pill"
                          href={`#${heThongRap.maHeThongRap}`}
                          key={movie.maPhim}
                        >
                          <img
                            src={heThongRap.logo}
                            className="mr-4"
                            alt=""
                            width="50px"
                          />
                          {heThongRap.tenHeThongRap}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="col-8">
                  <div className="tab-content">
                    {movie.heThongRapChieu.map((heThongRap, index) => {
                      return (
                        <div
                          className={`tab-pane fade show ${
                            index === 0 && "active"
                          }`}
                          id={heThongRap.maHeThongRap}
                        >
                          {heThongRap.cumRapChieu.splice(0, 5).map((cumRap) => {
                            return (
                              <div>
                                <div className="d-flex flex-row mb-3">
                                  <img
                                    src={heThongRap.logo}
                                    alt=""
                                    width="80px"
                                  />
                                  <div>
                                    <h5 className="mt-2 ml-4">
                                      {cumRap.tenCumRap}
                                    </h5>
                                    <p
                                      className="mt-2 ml-4"
                                      style={{ color: "rgba(0,0,0,0.4" }}
                                    >
                                      {cumRap.tenCumRap}
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="row my-3"
                                  style={{ marginLeft: 100 }}
                                >
                                  {cumRap.lichChieuPhim
                                    .splice(0, 12)
                                    .map((lichChieu) => {
                                      const { maLichChieu } = lichChieu;
                                      console.log(maLichChieu);
                                      return (
                                        <Link
                                          to={`/chitietphongve/${maLichChieu}`}
                                          className="btn btn-dark mx-1 my-1"
                                        >
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("HH:mm A")}
                                        </Link>
                                      );
                                    })}
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
          </div>
        </div>
      </div>
    );
  }
}
