import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import homePageReducer from "../containers/HomePage/reducer";
import history from "./history";

const rootReducer = combineReducers({
    homePageReducer,
    router: connectRouter(history),
})

export default rootReducer;