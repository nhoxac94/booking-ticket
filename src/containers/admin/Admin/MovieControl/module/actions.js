import movieApi from "apis/movieApi";
import { GET_INFORMATION_MOVIE_FAIL, GET_INFORMATION_MOVIE_REQUEST, GET_INFORMATION_MOVIE_SUCCESS } from "./types";


const actGetInformationMovieRequest = () => ({
  type: GET_INFORMATION_MOVIE_REQUEST,
});

const actGetInformationMovieSuccess = (movieData) => ({
  type: GET_INFORMATION_MOVIE_SUCCESS,
  payload: movieData,
});

const actGetInformationMovieFail = (error) => ({
  type: GET_INFORMATION_MOVIE_FAIL,
  payload: error,
});

export const actGetInformationMovie = (movieId) => {
  return dispatch => {
    dispatch(actGetInformationMovieRequest());
    movieApi
      .fetchInformationMovieApi(movieId)
      .then((res) => {
        console.log(res)
        dispatch(actGetInformationMovieSuccess(res.data));
      })
      .catch((error) => {
        dispatch(actGetInformationMovieFail(error));
      });
  };
};
