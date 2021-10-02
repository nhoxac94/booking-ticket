import React, { Component } from "react";
import ShowingMovie from "./ShowingMovie/ShowingMovie";
import "./MovieList.scss";
export default class MovieList extends Component {
  state = {
    change: false,
  };
  render() {
    const { movieList } = this.props;
    return (
      <div className="movielist py-5">
        <div className="container">
          <ul className="nav nav-pills mb-2" id="pills-tab" role="tablist">
            <li className="nav-item pr-2" role="presentation">
              <a
                className={`nav-link bg-transparent movielist__button ${
                  this.state.change || "movielist__buttonactive"
                }`}
                id="pills-upcomingmovie-tab"
                data-toggle="pill"
                href="#pills-upcomingmovie"
                role="tab"
                aria-controls="pills-upcomingmovie"
                aria-selected="true"
                onClick={() => {
                  this.setState({ change: false });
                }}
              >
                Phim Sắp Chiếu
              </a>
            </li>
            <li className="nav-item pr-2" role="presentation">
              <a
                className={`nav-link bg-transparent movielist__button ${
                  this.state.change && "movielist__buttonactive"
                }`}
                id="pills-showingmovie-tab"
                data-toggle="pill"
                href="#pills-showingmovie"
                role="tab"
                aria-controls="pills-showingmovie"
                aria-selected="false"
                onClick={() => {
                  this.setState({ change: true });
                }}
              >
                Phim Đang Chiếu
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-upcomingmovie"
              role="tabpanel"
              aria-labelledby="pills-upcomingmovie-tab"
            >
              <div className="container">
                <ShowingMovie movieList={movieList} upComingMovie={true} />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-showingmovie"
              role="tabpanel"
              aria-labelledby="pills-showingmovie-tab"
            >
              <div className="container">
                <ShowingMovie movieList={movieList} upComingMovie={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
