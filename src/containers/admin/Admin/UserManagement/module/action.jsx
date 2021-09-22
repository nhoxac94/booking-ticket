import userApi from "apis/userApi"
import { SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from "./types"

const actSearchUserRequest = () => ({
    type: SEARCH_USER_REQUEST,
})

const actSearchUserSuccess = (userName) => ({
    type: SEARCH_USER_SUCCESS,
    payload: userName,
})

const actSearchUserFail = (error) => ({
    type: SEARCH_USER_SUCCESS,
    payload: error,
})

export const actSearchUser = userName => {
    return dispatch => {
        dispatch(actSearchUserRequest())
        userApi.fetchSearchUserApi(userName)
            .then(res => {
                dispatch(actSearchUserSuccess(
                    {
                        data: res.data,
                        userName
                    }))
            })
            .catch(error => {
                dispatch(actSearchUserFail(error))
            })

    }
}