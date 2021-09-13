import React, { Component } from "react";
import { Carousel } from "antd";
function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#364d79",
};

export default class Banner extends Component {
  render() {
    return (
      <Carousel
        afterChange={onChange}
        style={{ position: "relative", zIndex: "1" }}
      >
        <div>
          <div style={contentStyle}>
            <img
              src="https://picsum.photos/id/237/1920/1080"
              className="w-100"
              alt=""
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src="https://picsum.photos/id/1/1920/1080"
              className="w-100"
              alt=""
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src="https://picsum.photos/id/10/1920/1080"
              className="w-100"
              alt=""
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src="https://picsum.photos/id/100/1920/1080"
              className="w-100"
              alt=""
            />
          </div>
        </div>
      </Carousel>
    );
  }
}
