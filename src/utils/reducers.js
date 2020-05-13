import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import homePageReducer from "../containers/HomePage/reducer";
import loginContainerReducer from "../containers/LoginContainer/reducer";
import userRecipesContainerReducer from "../containers/UserRecipesContainer/reducer";
import recipesFormContainerReducer from "../containers/RecipesFormContainer/reducer";
import recipeContainerReducer from "../containers/RecipeContainer/reducer";
import appReducer from '../containers/App/reducer';
import history from "./history";

const rootReducer = combineReducers({
    homePageReducer,
    loginContainerReducer,
    userRecipesContainerReducer,
    recipesFormContainerReducer,
    recipeContainerReducer,
    appReducer,
    router: connectRouter(history),
})

export default rootReducer;