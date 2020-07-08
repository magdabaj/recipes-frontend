import { BrowserRouter, Router, browserHistory } from 'react-router-dom'
import { createStore, Store } from "redux";
import { createMemoryHistory } from "history";
// import store from "../store";
import {Provider} from "react-redux";
import React from "react";
import rootReducer from "../reducers";
// import history from "../history";
import {ConnectedRouter} from "connected-react-router";
import {initialState} from "../../containers/App/reducer";

const store  = createStore(rootReducer, initialState)
const history = createMemoryHistory({
    initialEntries: ['/'],
})

export const withStoreAndRouter = component =>
    <Router history={history}>
        <Provider store={store}>
            {component}
        </Provider>
    </Router>
    // <Provider store={store}>
    //     <ConnectedRouter history={history}>
    //         <BrowserRouter>
    //             {component}
    //         </BrowserRouter>
    //     </ConnectedRouter>
    // </Provider>