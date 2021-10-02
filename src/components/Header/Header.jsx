import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { connect } from "react-redux";
import { actLogout } from "containers/shared/Auth/module/action";

class Header extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const { currentUser } = this.props;
    return (
      <header className="w-100">
        <div className="container py-1">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/">
              <img className="w-100" src="../logo.svg" alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMovie"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarMovie">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Trang Chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Liên Hệ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Tin Tức
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Ứng dụng
                  </a>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0">
                {currentUser ? (
                  <div className="navbar-collapse flex-grow-0 ">
                    <span className="navbar-text">
                      Chào, {currentUser.taiKhoan} !
                    </span>
                    <ul className="navbar-nav " style={{ marginRight: 80 }}>
                      <li className="nav-item dropdown">
                        <div>
                          <div
                            className="nav-link dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                          ></div>
                          <div className="dropdown-menu" style={{ left: -140 }}>
                            <Link
                              to="/thongtincanhan"
                              className="dropdown-item"
                            >
                              Thông tin cá nhân
                            </Link>
                            <div
                              className="dropdown-item"
                              onClick={() => this.handleLogout()}
                              style={{ cursor: "pointer" }}
                            >
                              Logout
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="text-white"
                    style={{ cursor: "pointer" }}
                  >
                    Đăng nhập / Đăng kí
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(actLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
