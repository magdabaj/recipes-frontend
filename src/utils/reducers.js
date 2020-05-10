import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import homePageReducer from "../containers/HomePage/reducer";
import loginContainerReducer from "../containers/LoginContainer/reducer"
import history from "./history";

const rootReducer = combineReducers({
    homePageReducer,
    loginContainerReducer,
    router: connectRouter(history),
})

export default rootReducer;