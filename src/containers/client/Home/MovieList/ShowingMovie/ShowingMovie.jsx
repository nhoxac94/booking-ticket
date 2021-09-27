import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel, Rate } from "antd";
import "./ShowingMovie.scss";
export default class ShowingMovie extends Component {
  render() {
    const { movieList } = this.props;
    const arrayCarousel = (array, chunk_size) =>
      Array(Math.ceil(array.length / chunk_size))
        .fill()
        .map((_, index) => index * chunk_size)
        .map((begin) => array.slice(begin, begin + chunk_size));
    const carouselItem = arrayCarousel(movieList, 8);
    return (
      <div
        id="carouselExampleInterval"
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
                    console.log(movieItem);
                    const { tenPhim, hinhAnh, danhGia, biDanh, maPhim } =
                      movieItem;
                    const rateValue = Math.round(parseInt(danhGia) / 2);
                    return (
                      <Link
                        to={`/chitietphim/${maPhim}`}
                        props={maPhim}
                        key={maPhim}
                      >
                        <div className="col mb-4">
                          <div className="card h-100">
                            <img
                              src={hinhAnh}
                              className="card-img-top movie__img img-fluid"
                              style={{ objectFit: "cover" }}
                              alt={biDanh}
                            />
                            <div className="card-body">
                              <h5
                                className="card-title text-truncate"
                                style={{
                                  width: "100%",
                                }}
                              >
                                {tenPhim}
                              </h5>
                            </div>
                            <div className="card-footer movie__footer border-0 bg-white">
                              <small className="text-muted">
                                <Rate disabled defaultValue={rateValue} />
                              </small>
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
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
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
