import React, { Component } from "react";

export default class CinemaDetailBanner extends Component {
  render() {
    return (
      <div className="w-100">
        <img
          src="https://reviewnao.com/wp-content/uploads/2020/12/galaxy-cinema-galaxy-cinema-ho-chi-minh-city.jpg"
          alt="bannerCinema"
          className="img-fluid"
          style={{
            width: "100%",
            height: "600px",
            objectFit: "cover",
            filter: "blur(5px)",
          }}
        />
      </div>
    );
  }
}
