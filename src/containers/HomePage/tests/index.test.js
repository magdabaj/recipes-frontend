import React from "react";
import { render } from "@testing-library/react";
import { withStoreAndRouter } from "../../../utils/testHelpers";
import RecipesHomePage from "../index";
import {describe, expect} from "@jest/globals";
import {Route} from "react-router";
import fetchStates from "../../../utils/fetchStates";

describe('<HomePage/>', () => {
    function renderRecipesHomePage(args = {}) {
        const defaultProps = {
            loadRecipes: () => {},
            loadRecipesByTag: () => {},
            loadTags: () => {},
        }

        const props = { ...defaultProps, ...args}

        return render(withStoreAndRouter(
            <Route
                path={'/tag/:tagId/page/:page'}
                render={(props) => <RecipesHomePage {...props} />}
            />))
    }

    it('should render and match snapshot', function () {
        const { container } = renderRecipesHomePage({status: fetchStates.success})
        expect(container.firstChild).toMatchSnapshot()
    });

    it('should render and match the snapshot', function () {
        const { container } = renderRecipesHomePage({status: fetchStates.fetching})
        expect(container.firstChild).toMatchSnapshot()
    });
})
