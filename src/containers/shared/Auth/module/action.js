import userApi from "apis/userApi";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  lOGIN_SUCCESS,
  LOG_OUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./type";

const actLoginRequest = () => ({
  type: LOGIN_REQUEST,
  payload: null,
});

const actLoginSuccess = (currentUser) => ({
  type: lOGIN_SUCCESS,
  payload: currentUser,
});

const actLoginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const actLogin = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    userApi
      .fetchLoginApi(user)
      .then((res) => {
        console.log(res);
        dispatch(actLoginSuccess(res.data));
        history.push("/");
      })
      .catch((error) => {
        dispatch(actLoginFail("Tài khoản hoặc mật khẩu không đúng"));
      });
  };
};

export const actLogout = () => ({
  type: LOG_OUT,
  payload: null,
});

const actSignupRequest = () => ({
  type: SIGNUP_REQUEST,
});

const actSignupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

const actSignupFail = (error) => ({
  type: SIGNUP_FAIL,
  payload: error,
});

export const actSignup = (user, history) => {
  return (dispatch) => {
    dispatch(actSignupRequest());
    userApi
      .fetchSignupApi(user)
      .then((res) => {
        const user = {
          taiKhoan: res.data.taiKhoan,
          matKhau: res.data.matKhau,
        };
        userApi
          .fetchLoginApi(user)
          .then((res) => {
            dispatch(actLoginSuccess(res.data));
          })
          .catch((error) => {
            dispatch(actLoginFail(error));
          });
        history.push("/");
      })
      .catch((error) => {
        dispatch(actSignupFail("Tài khoản hoặc email đã đăng kí"));
      });
  };
};
