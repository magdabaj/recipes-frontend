import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "../HomePage/Loadable";
import NavigationContainer from "../NavigationContainer";
import LoginContainer from "../LoginContainer";
import UserRecipesContainer from "../UserRecipesContainer/Loadable";
import RecipesFormContainer from "../RecipesFormContainer/Loadable";
import './index.css'
import RecipeContainer from "../RecipeContainer/Loadable";
import {ToastContainer} from "react-toastify";
import {createStructuredSelector} from "reselect";
import {makeSelectUser} from "../LoginContainer/selectors";
import {authenticate} from "../LoginContainer/actions";
import {connect} from "react-redux";
import {compose} from "redux";
import ProtectedRoute from "../../components/ProtectedRoute";
// todo add button go to all recipes

const App = ({authenticate, user}) => {
    useEffect(() => {
        if(!user.loggedIn) authenticate()
    }, [user.loggedIn]);
    console.log("user", user)
    return (
        <div>
            <NavigationContainer />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path={'/tag/:tagId/page/:page'} component={HomePage} />
                <Route path={'/page/:page'} component={HomePage} />
                <Route path={'/tag/:tagId'} component={HomePage} />
                <Route path="/recipes/:recipeId" component={RecipeContainer} />
                <ProtectedRoute path={'/add/:userId/recipe/:recipeId'} user={user} component={RecipesFormContainer} />
                <ProtectedRoute path={'/add/:userId'} user={user} component={RecipesFormContainer} />
                <ProtectedRoute path={'/user-recipes/page/:page'} user={user} component={UserRecipesContainer} />
                <ProtectedRoute path={'/user-recipes'} user={user} component={UserRecipesContainer} />
                <Route path="/login" component={LoginContainer} />
                {/*<Route component={NotFoundPage} />*/}
            </Switch>
            <ToastContainer />
            {/*<FooterContainer />*/}
            {/*<GlobalStyle />*/}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
    return {
        authenticate: () => dispatch(authenticate()),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);


export default compose(withConnect)(App);
