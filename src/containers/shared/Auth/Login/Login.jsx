import React, { Component } from "react";
import { withFormik } from "formik";
import { actLogin } from "../module/action";
import "./Login.scss";
import { connect } from "react-redux";
import SignUp from "./SignUp";

class Login extends Component {
  render() {
    const { history, stateLogin, handleChange, handleSubmit } = this.props;
    // if (stateLogin.loading) return <Loader />
    return (
      <div className="container-fluid login-movie">
        <div className="login-wrap">
          {stateLogin.error && (
            <div className="text-danger loginError">{stateLogin.error}</div>
          )}
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <div className="sign-in-htm">
                  <div className="group my-3">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <input
                      id="user"
                      type="text"
                      name="taiKhoan"
                      className="input"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group my-5">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      name="matKhau"
                      className="input"
                      data-type="password"
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="group">
                                        <input id="check" type="checkbox" className="check" defaultChecked />
                                        <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
                                    </div> */}
                  <div className="group mt-3">
                    <input
                      type="submit"
                      className="button"
                      defaultValue="Sign In"
                    />
                  </div>
                  <div className="hr" />
                  {/* <div className="foot-lnk">
                                        <a href="#forgot">Forgot Password?</a>
                                    </div> */}
                </div>
              </form>
              <SignUp history={history} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const LoginMovieWithFormik = withFormik({
  mapPropsToValues: () => ({ taiKhoan: "", matKhau: "" }),

  // Custom sync validation
  // validate: values => {
  //   const errors = {};

  //   if (!values.userName) {
  //     errors.name = "Required";
  //   }
  //   console.log(errors);
  //   return errors;
  // },
  handleSubmit: (values, { props, setSubmitting }) => {
    props.dispatch(actLogin(values, props.history));
  },
})(Login);

const mapStateToProps = (state) => ({
  stateLogin: state.authReducer,
});

export default connect(mapStateToProps)(LoginMovieWithFormik);
