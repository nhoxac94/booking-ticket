import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React, { Component } from "react";
import Banner from "./Banner/Banner";
import CinemaList from "./CinemaList/CinemaList";
import MovieList from "./MovieList/MovieList";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <MovieList />
        <CinemaList />
        <Footer />
      </div>
    );
  }
}
