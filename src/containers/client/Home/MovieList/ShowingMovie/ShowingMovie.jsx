import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import "./ShowingMovie.scss";
export default class ShowingMovie extends Component {
  render() {
    const { movieList } = this.props;
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 mx-auto movie__item">
        {movieList.slice(0, 16).map((movieItem, idx) => {
          const { tenPhim, hinhAnh, danhGia, biDanh, maPhim } = movieItem;
          const rateValue = Math.round(parseInt(danhGia) / 2);
          if (danhGia < 10)
            return (
              <Link to={`/chitietphim/${maPhim}`} props={maPhim} key={maPhim}>
                <div className="col mb-4" >
                  <div className="card h-100">
                    <img
                      src={hinhAnh}
                      className="card-img-top movie__img img-fluid"
                      alt={biDanh}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{tenPhim}</h5>
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
    );
  }
}
