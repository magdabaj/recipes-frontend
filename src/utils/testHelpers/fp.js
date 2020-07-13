import {createMemoryHistory} from "history";
import {Router} from "react-router";
import React from "react";
import {compose} from "redux";
import * as mockedStore from "../store";
import {Provider} from "react-redux";

const DEFAULT_ROUTE = '/';
export const createHistory = route => createMemoryHistory({ initialEntries: [route]})

export const mockRoutingInfo = ({
    route = DEFAULT_ROUTE,
    history = createHistory(route)
                         } = {}) => ui => <Router history={history}>{ui}</Router>

export const withProviders = (ui, providers) => compose(...providers)(ui)

export const withStore = (store = mockedStore) => ui => {
    return <Provider store={store}>{ui}</Provider>
}