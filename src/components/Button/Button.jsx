import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return <button className='btn btn-success mx-2'>{this.props.children}</button>;
  }
}
