import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React, { Component } from "react";
import Banner from "./Banner/Banner";
import CinemaList from "./CinemaList/CinemaList";
import MovieList from "./MovieList/MovieList";
import movieApi from "apis/movieApi";
export default class Home extends Component {
  state = {
    movieDetail: [],
    loading: true,
  };

  componentDidMount() {
    movieApi
      .fetchAllMovieApi()
      .then((res) => {
        console.table(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }
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
