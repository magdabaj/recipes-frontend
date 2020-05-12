import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from "../HomePage/Loadable";
import NavigationContainer from "../NavigationContainer";
import LoginContainer from "../LoginContainer";
import UserRecipesContainer from "../UserRecipesContainer/Loadable";
import './index.css'


export default function App() {
    return (
        <div>
            <NavigationContainer />
            <Switch>
                // todo add button go to all recipes
                <Route exact path="/" component={HomePage} />
                <Route path={'/home/tag/:tagId/page/:page'} component={HomePage} />
                <Route path={'/home/page/:page'} component={HomePage} />
                <Route path={'/home/tag/:tagId'} component={HomePage} />
                <Route path="/home" component={HomePage} />
                {/*<Route path="/recipes/:recipeId" component={RecipeContainer} />*/}
                {/*<Route path={'/recipe/add/:userId/recipe/:recipeId'} component={RecipesFormContainer} />*/}
                {/*<Route path={'/recipe/add/:userId'} component={RecipesFormContainer} />*/}
                <Route path={'/user-recipes/page/:page'} component={UserRecipesContainer} />
                <Route path={'/user-recipes'} component={UserRecipesContainer} />
                <Route path="/login" component={LoginContainer} />
                {/*<Route component={NotFoundPage} />*/}
            </Switch>
            {/*<ToastContainer />*/}
            {/*<FooterContainer />*/}
            {/*<GlobalStyle />*/}
        </div>
    );
}
