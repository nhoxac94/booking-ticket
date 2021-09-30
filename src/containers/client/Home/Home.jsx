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
    loading: 0,
  };

  componentDidMount() {
    movieApi
      .fetchAllMovieApi()
      .then((res) => {
        this.setState({
          movieList: res.data,
          loading: 1,
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
          loading: 2,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
  render() {
    const { movieList, cinemaList, loading } = this.state;
    if (loading !== 1 && loading !== 2) return <Loader />;
    return (
      <div>
        <Banner />
        <MovieList movieList={movieList} />
        <CinemaList cinemaList={cinemaList} />
      </div>
    );
  }
}
