import movieApi from 'apis/movieApi'
import {MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAIL} from './types'

const actMovieDetailRequest = () => ({
    type : MOVIE_DETAIL_REQUEST,
})

const actMovieDetailSuccess = (movieId) => ({
    type : MOVIE_DETAIL_SUCCESS,
    payload : movieId,
})

const actMovieDetailFail = error => ({
    type: MOVIE_DETAIL_FAIL,
    payload : error
})

export const actMovieDetail = (movieId) => {
    return dispatch => {
        dispatch(actMovieDetailRequest());
        movieApi.fetchAllMovieDetail(movieId)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
}