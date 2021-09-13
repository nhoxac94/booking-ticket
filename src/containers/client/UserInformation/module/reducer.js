import {
  GET_USER_INFORMATION_FAIL,
  GET_USER_INFORMATION_REQUEST,
  GET_USER_INFORMATION_SUCCESS,
  UPDATE_USER_INFORMATION_FAIL,
  UPDATE_USER_INFORMATION_REQUEST,
} from "./types";

const initialState = {
  user: [],
  loading: true,
  error: null,
};

const updateInformationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_INFORMATION_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_USER_INFORMATION_SUCCESS:
      return { ...state, user: payload, loading: false };
    case GET_USER_INFORMATION_FAIL:
      return { ...state, error: payload, loading: false };
    case UPDATE_USER_INFORMATION_REQUEST:
      return { ...state, loading: true, error : null };
    case UPDATE_USER_INFORMATION_FAIL :
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
export default updateInformationReducer;
