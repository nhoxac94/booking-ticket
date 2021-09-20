import React, { Component } from "react";
import movieApi from "apis/movieApi";
import Loader from "components/Loader/Loader";
import { Link } from "react-router-dom";
export default class CinemaDetailList extends Component {
  state = {
    otherCinema: null,
    cinemaActive: null,
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
      loading: false,
    });
  }

  render() {
    const reloadPage = () => {
      window.location.reload();
    };
    const { maHeThongRap } = this.props;
    const { cinemaActive, otherCinema, loading } = this.state;
    if (loading) return <Loader />;
    return (
      <>
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
                id={`v-pills-${cinemaActive[0].maCumRap}-tab`}
                data-toggle="pill"
                href={`#v-pills-${cinemaActive[0].maCumRap}`}
                role="tab"
                aria-controls={`v-pills-${cinemaActive[0].maCumRap}`}
                aria-selected="true"
              >
                {cinemaActive[0].tenCumRap}
                <br />
                <br />
                <p>{cinemaActive[0].diaChi}</p>
              </a>
              {otherCinema[0].lstCumRap.map((otherCine, idx) => {
                const { tenCumRap, maCumRap } = otherCine;
                if (cinemaActive[0].maCumRap !== maCumRap)
                  return (
                    <Link
                      to={{
                        pathname: `${maCumRap}`,
                        state: { maHeThongRap },
                      }}
                      onClick={() => setTimeout(reloadPage, 5)}
                    >
                      {tenCumRap}
                    </Link>
                  );
              })}
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id={`#v-pills-${cinemaActive[0].maCumRap}`}
                role="tabpanel"
                aria-labelledby={`v-pills-${cinemaActive[0].maCumRap}-tab`}
              >
                {cinemaActive[0].danhSachPhim.map((lstMovie, idx) => {
                  const { tenPhim, hinhAnh, maPhim } = lstMovie;
                  return (
                    <div className="card mb-3 w-100">
                      <div className="row no-gutters">
                        <div className="col-md-1">
                          <img
                            src={hinhAnh}
                            alt="..."
                            className="h-100 w-100"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-md-11">
                          <div className="card-body">
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
                                      {new Date(
                                        ngayChieuGioChieu
                                      ).toLocaleTimeString()}
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
      </>
    );
  }
}
