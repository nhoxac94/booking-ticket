import userApi from "apis/userApi";
import {
  GET_USER_INFORMATION_FAIL,
  GET_USER_INFORMATION_REQUEST,
  GET_USER_INFORMATION_SUCCESS,
  UPDATE_USER_INFORMATION_REQUEST,
  UPDATE_USER_INFORMATION_SUCCESS,
} from "./types";

const actUpdateUserInformationRequest = () => ({
  type: UPDATE_USER_INFORMATION_REQUEST,
});

const actUpdateUserInformationSuccess = (information) => ({
  type: UPDATE_USER_INFORMATION_SUCCESS,
  payload: information,
});

const actUpdateUserInformationFail = (error) => ({
  type: UPDATE_USER_INFORMATION_REQUEST,
  payload: error,
});

export const actUpdateInformation = (user, accessToken) => {
  return dispatch => {
    dispatch(actUpdateUserInformationRequest());
    userApi
      .fetchUpdateUserInformation(user, accessToken)
      .then(res => actUpdateUserInformationSuccess(res))
      .catch(error => actUpdateUserInformationFail(error));
  };
};

const actGetUserInformationRequest = () => ({
  type : GET_USER_INFORMATION_REQUEST,
})


const actGetUserInformationSuccess = (user) => ({
  type: GET_USER_INFORMATION_SUCCESS,
  payload: user,
});

const actGetUserInformationFail = (error) => ({
  type : GET_USER_INFORMATION_FAIL,
  payload : error,
})


export const actGetUserInformation = (user) => {
  return dispatch => {
    dispatch(actGetUserInformationRequest())
    userApi.fetchUserInformation(user)
    .then((res) => {
      dispatch(actGetUserInformationSuccess(res))
    })
    .catch(err => actGetUserInformationFail(err))
    ;
  };
};
