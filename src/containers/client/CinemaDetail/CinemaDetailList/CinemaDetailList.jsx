import React, { Component } from "react";
import movieApi from "apis/movieApi";
import Loader from "components/Loader/Loader";
import { Link } from "react-router-dom";
import "./CinemaDetailList.scss";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const reloadPage = () => {
  window.scrollTo(0, 0);
  window.location.reload();
};
export default class CinemaDetailList extends Component {
  state = {
    otherCinema: null,
    cinemaActive: null,
    logo: null,
    loading: true,
  };

  componentDidMount() {
    const { cinemaInfo, maCumRap } = this.props;
    const findCinema = cinemaInfo[0].lstCumRap.filter(
      (arrCinema) => arrCinema.maCumRap === maCumRap
    );
    this.setState({
      otherCinema: cinemaInfo,
      cinemaActive: findCinema,
      logo: cinemaInfo[0].logo,
      loading: false,
    });
  }

  render() {
    const { maHeThongRap } = this.props;
    const { cinemaActive, otherCinema, loading } = this.state;
    if (loading) return <Loader />;
    return (
      <div>
        <div className="w-100 CinemaBanner">
          <div className="CinemaBanner__info d-flex align-items-center h-100 w-100 align-self-center justify-content-center flex-column flex-sm-row flex-md-column">
            <div className="CinemaBanner__img mx-2">
              <img src={this.state.logo} alt={cinemaActive[0].maCumRap} />
            </div>
            <div className="CinemaBanner__content text-white text-wrap mx-2 w-25">
              <p className="h3">{cinemaActive[0].tenCumRap}</p>
              <p className="h5">{cinemaActive[0].diaChi}</p>
              <div className="CinemaBanner__icons mt-4">
                <ul className="text-center p-0">
                  <li>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faTwitter} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPinterest} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faYoutube} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cinemadetaillist__bg py-5">
          <div className="cinemadetaillist container py-3 shadow bg-white rounded">
            <div className="row">
              <div className="col-lg-4 col-12 col-md-5">
                <div
                  className="nav flex-column"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div
                    className="card cinemadetaillist__active"
                    style={{ maxWidth: 540 }}
                  >
                    <a
                      className="nav-link p-0"
                      id={`v-pills-${cinemaActive[0].maCumRap}-tab`}
                      data-toggle="pill"
                      href={`#v-pills-${cinemaActive[0].maCumRap}`}
                      role="tab"
                      aria-controls={`v-pills-${cinemaActive[0].maCumRap}`}
                      aria-selected="true"
                    >
                      <div className="row no-gutters">
                        <div className="col-lg-4 col-md-12">
                          <img
                            src="https://reviewnao.com/wp-content/uploads/2020/12/galaxy-cinema-galaxy-cinema-ho-chi-minh-city.jpg"
                            alt="cinema"
                            className="img-fluid h-100"
                          />
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="card-body">
                            <h5 className="card-title">
                              {cinemaActive[0].tenCumRap}
                            </h5>
                            <p className="card-text">
                              {cinemaActive[0].diaChi}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {otherCinema[0].lstCumRap.map((otherCine, idx) => {
                    const { tenCumRap, maCumRap, diaChi } = otherCine;
                    if (cinemaActive[0].maCumRap !== maCumRap)
                      return (
                        <div
                          className="card mt-3 cinemadetaillist__pills"
                          style={{ maxWidth: 540 }}
                        >
                          <Link
                            to={{
                              pathname: `${maCumRap}`,
                              state: { maHeThongRap },
                            }}
                            onClick={() => setTimeout(reloadPage, 5)}
                            className="cinemadetaillist__link"
                          >
                            <div className="row no-gutters">
                              <div className="col-lg-4 col-md-12">
                                <img
                                  src="https://reviewnao.com/wp-content/uploads/2020/12/galaxy-cinema-galaxy-cinema-ho-chi-minh-city.jpg"
                                  alt="cinema"
                                  className="img-fluid h-100"
                                />
                              </div>
                              <div className="col-lg-8 col-md-12">
                                <div className="card-body">
                                  <h5 className="card-title">{tenCumRap}</h5>
                                  <p className="card-text">{diaChi}</p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                  })}
                </div>
              </div>
              <div className="col-lg-8 col-12 col-md-7">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active cinemadetaillist__movie"
                    id={`#v-pills-${cinemaActive[0].maCumRap}`}
                    role="tabpanel"
                    aria-labelledby={`v-pills-${cinemaActive[0].maCumRap}-tab`}
                  >
                    {cinemaActive[0].danhSachPhim.map((lstMovie, idx) => {
                      const { tenPhim, hinhAnh, maPhim } = lstMovie;
                      return (
                        <div className="card mb-3 w-100 cinemadetaillist__moviecard">
                          <div className="row no-gutters">
                            <div className="col-md-3 col-4">
                              <Link to={`/chitietphim/${maPhim}`}>
                                <img
                                  src={hinhAnh}
                                  alt="..."
                                  className="cinemadetaillist__movieimg"
                                />
                              </Link>
                            </div>
                            <div className="col-md-9 col-8">
                              <div className="card-body cinemadetaillist__movieshowtime">
                                <h5 className="card-title">{tenPhim}</h5>
                                <p className="card-text">
                                  {lstMovie.lstLichChieuTheoPhim.map(
                                    (showingTime, idx) => {
                                      const { ngayChieuGioChieu, maLichChieu } =
                                        showingTime;
                                      return (
                                        <Link
                                          to={`/chitietphongve/${maLichChieu}`}
                                          className="btn btn-dark mx-1 my-1"
                                        >
                                          {moment(ngayChieuGioChieu).format(
                                            "HH:mm A"
                                          )}
                                        </Link>
                                      );
                                    }
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
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
