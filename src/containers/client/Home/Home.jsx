import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React, { Component } from "react";
import Banner from "./Banner/Banner";
import CinemaList from "./CinemaList/CinemaList";
import MovieList from "./MovieList/MovieList";
import movieApi from "apis/movieApi";
import Loader from "components/Loader/Loader";
export default class Home extends Component {
  state = {
    movieList: [],
    cinemaList: [],
    movieBanner: [],
    loading: true,
  };

  componentDidMount() {
    movieApi
      .fetchAllMovieApi()
      .then((res) => {
        this.setState({
          movieList: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        alert(err);
      });
    movieApi
      .fetchAllCinema()
      .then((res) => {
        this.setState({
          cinemaList: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
  render() {
    const { movieList, cinemaList, loading } = this.state;
    if (loading) return <Loader />;
    return (
      <div>
        <Banner />
        <MovieList movieList={movieList} />
        <CinemaList cinemaList={cinemaList} />
      </div>
    );
  }
}
