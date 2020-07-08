import React from "react";
import { render } from "@testing-library/react";
import { withStoreAndRouter } from "../../../utils/testHelpers";
import RecipesHomePage from "../index";
import {describe, expect} from "@jest/globals";

describe('<HomePage/>', () => {
    function renderRecipesHomePage(args = {}) {
        const defaultProps = {
            loadRecipes: () => {},
            loadRecipesByTag: () => {},
            loadTags: () => {},
        }

        const props = { ...defaultProps, ...args}

        return render(withStoreAndRouter(<RecipesHomePage {...props}/>))
    }

    it('should render and match snapshot', function () {
        const { container } = renderRecipesHomePage()
        expect(container.firstChild).toMatchSnapshot()
    });
})
