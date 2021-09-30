import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import "./ShowingMovie.scss";
export default class ShowingMovie extends Component {
  render() {
    const { movieList, upComingMovie } = this.props;
    const arrayCarousel = (array, chunk_size) =>
      Array(Math.ceil(array.length / chunk_size))
        .fill()
        .map((_, index) => index * chunk_size)
        .map((begin) => array.slice(begin, begin + chunk_size));
    const carouselItem = arrayCarousel(movieList, 8);
    return (
      <div
        id={`${
          (upComingMovie && "carouselUpComingMovie") || "carouselShowingMovie"
        }`}
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {carouselItem.map((numberCarousel, idx) => {
            return (
              <div
                className={`carousel-item ${idx === 1 && "active"}`}
                data-interval={10000}
                style={{
                  height: "1300px",
                }}
              >
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mx-auto movie__item">
                  {numberCarousel.map((movieItem, idx) => {
                    const { tenPhim, hinhAnh, danhGia, biDanh, maPhim } =
                      movieItem;
                    const rateValue = Math.round(parseInt(danhGia) / 2);
                    return (
                      <Link
                        to={`/chitietphim/${maPhim}`}
                        props={maPhim}
                        key={maPhim}
                        className="movie__list"
                      >
                        <div className="col mb-4 px-0">
                          <div className="card h-100 bg-transparent movie__card mx-2">
                            <div className="movie__containerimg">
                              <img
                                src={hinhAnh}
                                className="card-img-top movie__img img-fluid"
                                alt={biDanh}
                              />
                            </div>
                            <div className="card-body movie__text py-2 bg-transparent">
                              <h5
                                className="card-title text-truncate text-center"
                                style={{
                                  width: "100%",
                                }}
                              >
                                {tenPhim}
                              </h5>
                              <Rate
                                disabled
                                defaultValue={rateValue}
                                className="movie__star"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev carousel-control-movie-prev"
          href={`${
            (upComingMovie && "#carouselUpComingMovie") ||
            "#carouselShowingMovie"
          }`}
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next carousel-control-movie-next"
          href={`${
            (upComingMovie && "#carouselUpComingMovie") ||
            "#carouselShowingMovie"
          }`}
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
