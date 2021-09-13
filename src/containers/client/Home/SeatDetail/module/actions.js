import {SEAT_DETAIL_REQUEST, SEAT_DETAIL_SUCCESS, SEAT_DETAIL_FAIL} from './types'

const actSeatDetailRequest = () => ({
    type: SEAT_DETAIL_REQUEST
})

const actSeatDetaiSuccess = (maLichChieu) => ({
    type: SEAT_DETAIL_SUCCESS,
    payload : maLichChieu,
})

const actSeatDetailFail = (error) => ({
    type: SEAT_DETAIL_FAIL,
    payload : error,
})

const actSeatDetail = () => {
    return dispatch => {
        dispatch(actSeatDetailRequest())
        
    }
}