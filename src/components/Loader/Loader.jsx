import React, { Component } from "react";
import { Spin } from "antd";
import "./Loader.scss";
export default class Loader extends Component {
  render() {
    return (
      <div className="loader" className='text-center mw-100 mh-100'>
        <Spin size="large" />
      </div>
    );
  }
}
