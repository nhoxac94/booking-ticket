import React, { Component } from "react";
import CinemaDetailBanner from "./CinemaDetailBanner/CinemaDetailBanner";
import CinemaDetailList from "./CinemaDetailList/CinemaDetailList";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import callApi from "utils/callApi";
import movieApi from "apis/movieApi";
import Loader from "components/Loader/Loader";
export default class CinemaDetail extends Component {
  state = {
    cinemaInfo: [],
    maCumRap: null,
    maHeThongRap: null,
    loading: true,
  };
  componentDidMount() {
    const { maCumRap } = this.props.match.params;
    const { maHeThongRap } = this.props.location.state;
    movieApi
      .fetchDetailCinema(maHeThongRap)
      .then((res) => {
        this.setState({
          cinemaInfo: res.data,
          maHeThongRap: maHeThongRap,
          maCumRap: maCumRap,
          loading: false,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
  render() {
    const { loading, cinemaInfo, maCumRap, maHeThongRap } = this.state;
    if (loading) return <Loader />;
    return (
      <div>
        <Header />
        <CinemaDetailBanner />
        <CinemaDetailList
          cinemaInfo={cinemaInfo}
          maCumRap={maCumRap}
          maHeThongRap={maHeThongRap}
        />
        <Footer />
      </div>
    );
  }
}
