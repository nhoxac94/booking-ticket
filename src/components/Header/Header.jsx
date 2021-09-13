import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { connect } from 'react-redux'
import { actLogout } from "containers/shared/Auth/module/action";

class Header extends Component {
  handleLogout = () => {
    this.props.logoutUser()
  }
  render() {
    const { currentUser } = this.props;
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top mx-2">
          <a className="navbar-brand" href="#">
            <img src="../logo192.png" className="w-25" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link to="/">
                  Trang Chủ <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liên Hệ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ứng dụng
                </a>
              </li>
            </ul>

            <div className="form-inline my-2 my-lg-0">
              {currentUser ? <div className="btn btn-success" onClick = {this.handleLogout}>Đăng xuất</div>
                : <Link to="/login" className="btn btn-primary">Đăng nhập</Link>
              }
            </div>
            
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
})

const mapDispatchToProps = dispatch => ({
  logoutUser : () => {dispatch(actLogout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)