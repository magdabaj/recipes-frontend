import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from "../HomePage";
import NavigationContainer from "../NavigationContainer";
import LoginContainer from "../LoginContainer";
import './index.css'


export default function App() {
    return (
        <div>
            <NavigationContainer />
            <Switch>
                <Route exact path="/" component={HomePage} />
                // todo add button go to all recipes
                {/*<Route path={'/home/tag/:tagId/page/:page'} component={RecipesHomePage} />*/}
                {/*<Route path={'/home/page/:page'} component={RecipesHomePage} />*/}
                {/*<Route path={'/home/tag/:tagId'} component={RecipesHomePage} />*/}
                {/*<Route path={'/home'} component={RecipesHomePage} />*/}
                {/*<Route path="/recipes/:recipeId" component={RecipeContainer} />*/}
                {/*<Route path={'/recipe/add/:userId/recipe/:recipeId'} component={RecipesFormContainer} />*/}
                {/*<Route path={'/recipe/add/:userId'} component={RecipesFormContainer} />*/}
                {/*<Route path={'/user-recipes/page/:page'} component={UserRecipesContainer} />*/}
                {/*<Route path={'/user-recipes'} component={UserRecipesContainer} />*/}
                <Route path="/login" component={LoginContainer} />
                {/*<Route component={NotFoundPage} />*/}
            </Switch>
            {/*<ToastContainer />*/}
            {/*<FooterContainer />*/}
            {/*<GlobalStyle />*/}
        </div>
    );
}
