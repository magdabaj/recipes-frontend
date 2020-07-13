import { BrowserRouter, Router, browserHistory } from 'react-router-dom'
import { createStore, Store } from "redux";
import { createMemoryHistory } from "history";
import store from "../store";
import {Provider} from "react-redux";
import React from "react";
import { render } from "@testing-library/react";

// const store  = createStore(rootReducer, initialState={})
const memoryHistory = createMemoryHistory({
    initialEntries: ['/'],
})

export const withStoreAndRouter = component =>
    <Router history={memoryHistory}>
        <Provider store={store}>
            {component}
        </Provider>
    </Router>

export const renderWithRouter = (
    ui,
    {
        route = '/',
        history = memoryHistory,
    } = {}
) => (
    {
        ...render(<Router history={history}>{ui}</Router>),
        history,
    }
)
