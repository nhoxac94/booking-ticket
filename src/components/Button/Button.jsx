import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        className={`btn btn-info ${this.props.styling}`}
        data-toggle={this.props.dataToggle}
        data-target={this.props.dataTarget}
      >
        {this.props.children}
      </button>
    );
  }
}
