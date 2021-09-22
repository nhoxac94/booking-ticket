import { GET_INFORMATION_MOVIE_FAIL, GET_INFORMATION_MOVIE_REQUEST, GET_INFORMATION_MOVIE_SUCCESS } from "./types";

const initialState = {
  informationMovie: null,
  loading: true,
  error : null,
};

const adminMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INFORMATION_MOVIE_REQUEST:
      return { ...state, loading: true, error : null };
    case GET_INFORMATION_MOVIE_SUCCESS:        
      return { ...state, loading: false, informationMovie : payload };
    case GET_INFORMATION_MOVIE_FAIL:
      return { ...state, loading: false, error : payload };
    default:
      return state;
  }
};

export default adminMovieReducer;
