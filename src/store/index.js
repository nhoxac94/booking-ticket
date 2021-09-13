import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import authReducer from "containers/shared/Auth/module/reducer";
import updateInformationReducer from "containers/client/UserInformation/module/reducer";


const rootReducer = combineReducers({
    authReducer,
    updateInformationReducer,
});

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;