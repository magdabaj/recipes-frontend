import { Router } from 'react-router-dom'
import { createMemoryHistory } from "history";
import store from "../store";
import {Provider} from "react-redux";
import React from "react";
import { render } from "@testing-library/react";
import {createStore} from "redux";
// import {reducer} from "react-toastify/dist/hooks/toastContainerReducer";

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
        history = memoryHistory,
    } = {}
) => (
    {
        ...render(<Router history={history}>{ui}</Router>),
        history,
    }
)

export const renderWithRouterKentCDodds = (
    ui,
        {
            route='/',
            history = createMemoryHistory({initialEntries: [route]}),
            ...renderOptions
        } = {}
) => {
    // eslint-disable-next-line react/prop-types
    function Wrapper({children}) {
        return <Router history={history}>
            {children}
        </Router>
    }

    return {
        ...render(ui, {wrapper: Wrapper, ...renderOptions})
    }
}

export const renderWithProviderKentCDodds = (
        ui,
        reducer,
        {initialState, store = createStore(reducer, initialState), ...options} = {},
    ) => {
    // eslint-disable-next-line react/prop-types
    function Wrapper({children}) {
        return <Provider store={store}>
            {children}
        </Provider>
    }
    return render(ui, {wrapper: Wrapper, ...options})
}