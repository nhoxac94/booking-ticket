import { MOVIE_DETAIL_FAIL, MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS } from "./types";

const initialState = {
  movieDetail: null,
  loading: false,
  error: null,
};

const movieDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_DETAIL_REQUEST:
      return { ...state, loading : true };
    case MOVIE_DETAIL_SUCCESS:
      return { ...state, loading : false, movieDetail : payload };
    case MOVIE_DETAIL_FAIL:
      return { ...state, loading : false, error : payload };

    default:
      return state;
  }
};

export default movieDetailReducer;
