import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import homePageReducer from "../containers/HomePage/reducer";
import loginContainerReducer from "../containers/LoginContainer/reducer";
import userRecipesContainerReducer from "../containers/UserRecipesContainer/reducer";
import recipesFormContainerReducer from "../containers/RecipesFormContainer/reducer";
import history from "./history";

const rootReducer = combineReducers({
    homePageReducer,
    loginContainerReducer,
    userRecipesContainerReducer,
    recipesFormContainerReducer,
    router: connectRouter(history),
})

export default rootReducer;