import userApi from "apis/userApi";
import {
  GET_USER_INFORMATION_FAIL,
  GET_USER_INFORMATION_REQUEST,
  GET_USER_INFORMATION_SUCCESS,
  
} from "./types";

const actGetUserInformationRequest = () => ({
  type: GET_USER_INFORMATION_REQUEST,
});

const actGetUserInformationSuccess = (user) => ({
  type: GET_USER_INFORMATION_SUCCESS,
  payload: user,
});

const actGetUserInformationFail = (error) => ({
  type: GET_USER_INFORMATION_FAIL,
  payload: error,
});

export const actGetUserInformation = (user) => {
  return (dispatch) => {
    dispatch(actGetUserInformationRequest());
    userApi
      .fetchUserInformationApi(user)
      .then((res) => {
        dispatch(actGetUserInformationSuccess(res));
      })
      .catch((err) => dispatch(actGetUserInformationFail(err)));
  };
};
