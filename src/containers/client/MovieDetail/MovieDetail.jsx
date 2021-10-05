import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import Loader from "components/Loader/Loader";
import moment from "moment";
import "./MovieDetail.scss";
import "antd/dist/antd.css";
import { Rate } from "antd";
import movieApi from "apis/movieApi";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import MovieReview from "./MovieReview/MovieReview";
export default class MovieDetail extends Component {
  state = {
    movie: [],
    loading: true,
    isPlaying: false,
    isActive: 0,
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
        className="py-5"
        style={{
          backgroundImage: `linear-gradient(to right, #232526de, #414345e3), url(${movie.hinhAnh})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "20vh",
          width: "100%",
        }}
      >
        <div className="movieDetail">
          <div className="container">
            <div className="py-5">
              <div className="row">
                <div className="col-lg-3 col-12 align-self-center">
                  <div className="text-center">
                    <div className="movieDetail__containing w-100 h-100">
                      <img
                        src={movie.hinhAnh}
                        alt={movie.biDanh}
                        className="w-100 h-100 rounded movieDetail__img"
                      />
                      <FontAwesomeIcon
                        data-toggle="modal"
                        data-target={`#modal${movie.biDanh}`}
                        className="btn movieDetail__playbutton"
                        icon={faPlayCircle}
                        style={{
                          fontSize: "100px",
                        }}
                        onClick={() =>
                          this.setState({
                            isPlaying: true,
                          })
                        }
                      />
                    </div>
                    <div
                      className="modal fade"
                      id={`modal${movie.biDanh}`}
                      tabIndex={-1}
                      aria-labelledby={`modalLabel${movie.biDanh}`}
                      aria-hidden="true"
                      onClick={() => this.setState({ isPlaying: false })}
                    >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content bg-transparent border-0">
                          <div className="modal-header p-0 m-0 border-0">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="embed-responsive embed-responsive-16by9">
                              <ReactPlayer
                                className="w-100"
                                url={movie.trailer}
                                width="100%"
                                height="100%"
                                playing={this.state.isPlaying}
                                controls={true}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="movieDetail__icons mt-4">
                      <ul className="text-center p-0">
                        <li>
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            className="movieDetail__brand"
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="movieDetail__brand"
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faPinterest}
                            className="movieDetail__brand"
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="movieDetail__brand"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 align-self-center col-12">
                  <div className="text-justify text-white movieDetail__content">
                    <p className="mt-2 h2">{movie.tenPhim}</p>
                    <p className="mt-2 h5">
                      Ngày khởi chiếu:{" "}
                      {moment(movie.ngayChieuGioChieu).format("LL")}
                    </p>
                    <p className="h5">English, Spanish, Hindi, Japan</p>
                    <p>{movie.moTa}</p>
                  </div>
                </div>
                <div className="col-lg-3 col-12 align-self-center">
                  <div
                    className={`c100 big green 
                    p${movie.danhGia * 10}
                    `}
                  >
                    <span>{movie.danhGia}/10</span>
                    <div className="slice">
                      <div className="bar"></div>
                      <div className="fill"></div>
                    </div>
                  </div>
                  <div className="rate py-5">
                    <Rate allowHalf value={movie.danhGia / 2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-transparent">
            <div className="container bg-light shadow-lg p-3 mb-5 rounded bg-transparent movieDetail__pills">
              <div>
                <ul
                  className="nav nav-tabs border-dark"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active bg-transparent border-0 border-dark"
                      id="showingtime-tab"
                      data-toggle="tab"
                      href="#showingtime"
                      role="tab"
                      aria-controls="showingtime"
                      aria-selected="false"
                    >
                      Giờ Chiếu
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link bg-transparent"
                      id="review-tab"
                      data-toggle="tab"
                      href="#review"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >
                      Review
                    </a>
                  </li>
                </ul>
                <div className="tab-content movieDetail__tab" id="myTabContent">
                  <div
                    className="tab-pane fade movieDetail__review"
                    id="review"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                  >
                    <div className="text-white">
                      <MovieReview />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active movieDetail__cinema"
                    id="showingtime"
                    role="tabpanel"
                    aria-labelledby="showingtime-tab"
                  >
                    <div className="theaterDetail py-5">
                      <div className="row py-5">
                        <div className="col-lg-3 col-2">
                          <div className="nav flex-column justify-content-center align-self-center align-items-center nav-tabs border-0">
                            {movie.heThongRapChieu.map((heThongRap, index) => {
                              const { logo } = heThongRap;
                              return (
                                <div
                                  className={`nav-link mb-3 p-0 text-center theaterDetail__logocontain bg-transparent border-0 ${
                                    (index === 0 &&
                                      "theaterDetail__logocontainactive" &&
                                      index === 0 &&
                                      "") ||
                                    (this.state.isActive === index &&
                                      "theaterDetail__logocontainactive")
                                  }`}
                                  data-toggle="pill"
                                  href={`#${heThongRap.maHeThongRap}`}
                                  key={heThongRap.maHeThongRap}
                                  onClick={() =>
                                    this.setState({ isActive: index })
                                  }
                                >
                                  <img
                                    src={logo}
                                    className="theaterDetail__logocontain"
                                    alt=""
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-lg-9 col-10">
                          <div className="tab-content">
                            {movie.heThongRapChieu.map((heThongRap, index) => {
                              return (
                                <div
                                  className={`tab-pane fade show ${
                                    index === 0 && "active"
                                  }`}
                                  id={heThongRap.maHeThongRap}
                                  key={heThongRap.maHeThongRap}
                                >
                                  {heThongRap.cumRapChieu.map((cumRap) => {
                                    return (
                                      <div
                                        className="theaterDetail__contain mb-4 "
                                        key={cumRap.maCumRap}
                                      >
                                        <div className="d-flex flex-row mb-3">
                                          <img
                                            className="theaterDetail__img"
                                            src={heThongRap.logo}
                                            alt={cumRap.maCumRap}
                                          />
                                          <div>
                                            <h5 className="mt-2 ml-4">
                                              {cumRap.tenCumRap}
                                            </h5>
                                            <p className="mt-2 ml-4">
                                              {cumRap.tenCumRap}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="row my-3 theaterDetail__grid">
                                          <div className="theaterDetail__time align-self-center">
                                            <FontAwesomeIcon
                                              icon={faClock}
                                              style={{
                                                color: "white",
                                                fontSize: "30px",
                                              }}
                                              className="mr-4  "
                                            />
                                          </div>

                                          {cumRap.lichChieuPhim.map(
                                            (lichChieu) => {
                                              const { maLichChieu } = lichChieu;
                                              return (
                                                <Link
                                                  to={`/chitietphongve/${maLichChieu}`}
                                                  className="btn btn-secondary mx-1 my-1"
                                                  key={maLichChieu}
                                                >
                                                  {moment(
                                                    lichChieu.ngayChieuGioChieu
                                                  ).format("HH:mm A")}
                                                </Link>
                                              );
                                            }
                                          )}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
