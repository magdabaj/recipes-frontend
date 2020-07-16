import {loadRecipesSaga} from "../saga";
import { put } from 'redux-saga/effects'
import {expect} from "@jest/globals";
// import 'core-js/stable';
// import 'regenerator-runtime/runtime'
import {fakeRecipes} from "../../../utils/testHelpers/fixtures/recipes";
import {loadRecipesSuccess} from "../actions";
import "@babel/polyfill/noConflict"
import {fakeNextPage} from "../../../utils/testHelpers/fixtures/page";
import {LOAD_RECIPES} from "../constants";

describe('HomePage saga', () => {
    let loadRecipesSagaGenerator;

    beforeEach(() => {
        loadRecipesSagaGenerator = loadRecipesSaga({type: LOAD_RECIPES,page: 1})

        const callDescriptor = loadRecipesSagaGenerator.next().value
        expect(callDescriptor).toMatchSnapshot()
        // todo how shall I test this???
        // const callPageDescriptor = await waitFor(() => loadRecipesSagaGenerator.next({ page: 1 }).value);
        // await waitForExpect(() => expect(callPageDescriptor).toMatchSnapshot())
    })

    it('should dispatch the loadRecipesSuccess action if it gets the data successfully', function () {
        const response = {
            items: fakeRecipes,
            nextPage:fakeNextPage,
            totalPages: 5
        }
        const putLoadRecipesSuccess = loadRecipesSagaGenerator.next(response).value;
        expect(putLoadRecipesSuccess).toEqual(put(loadRecipesSuccess(response)))
    });
})