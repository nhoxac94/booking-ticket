import React, { Component } from "react";
import CinemaDetailBanner from "./CinemaDetailBanner/CinemaDetailBanner";
import CinemaDetailList from "./CinemaDetailList/CinemaDetailList";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
export default class CinemaDetail extends Component {
  render() {
    return (
      <div>
        <Header />
        <CinemaDetailBanner />
        <CinemaDetailList />
        <Footer />
      </div>
    );
  }
}
