import { SEARCH_USER_FAIL } from "./types";
import { SEARCH_USER_SUCCESS } from "./types";
import { SEARCH_USER_REQUEST } from "./types";

const initialState = {
    user: null,
    loading: false,
    error: null,
}

const adminUserReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SEARCH_USER_REQUEST:
            return { ...state, loading: true, error: null }
        case SEARCH_USER_SUCCESS:
            const { data, userName } = payload
            const indexUser = data.findIndex(user => {
                return user.taiKhoan === userName;
            });
            const user = data[indexUser]
            return { ...state, loading: false, user: user }
        case SEARCH_USER_FAIL:
            return { ...state, loading: false, error: false }
        default:
            return state
    }
}


export default adminUserReducer;