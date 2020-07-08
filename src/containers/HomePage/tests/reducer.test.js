import { produce } from 'immer';
import homePageReducer from "../reducer";
import fetchStates from "../../../utils/fetchStates";
import {
    loadRecipes,
    loadRecipesByTag,
    loadRecipesByTagError,
    loadRecipesByTagSuccess,
    loadRecipesError,
    loadRecipesSuccess
} from "../actions";
import { fakeRecipes as items} from "../../../utils/testHelpers/fixtures/recipes";
import { fakeNextPage as nextPage, fakePreviousPage as previousPage } from "../../../utils/testHelpers/fixtures/page";
import {it} from "@jest/globals";

describe('homePageReducer', () => {
    let state;
    const error = 'some error'
    beforeEach(() => {
        state = {
            recipes: [],
            tags: [],
            status: fetchStates.fetching,
            error: null,
            page: 1,
            totalPages: null,
            previousPage: null,
            nextPage: null,
        }
    })

    it('returns initial state', () => {
        expect(homePageReducer(undefined,{})).toEqual(state)
    })

    it('handles the loadRecipes action correctly', function () {
        const expectedResult = produce(state, draft => {
            draft.status = fetchStates.fetching
        })

        expect(homePageReducer(state, loadRecipes())).toEqual(expectedResult)
    });

    it('handles the loadRecipesSuccess action correctly', function () {
        const expectedResult = produce(state, draft => {
            draft.status = fetchStates.success;
            draft.recipes = items;
            draft.totalPages = 1;
            draft.previousPage = previousPage;
            draft.nextPage = nextPage;
        })

        expect(homePageReducer(state, loadRecipesSuccess({items, totalPages: 1, previousPage, nextPage}))).toEqual(expectedResult)
    });

    it('handles the loadRecipesError action correctly', () => {
        const expectedResult = produce(state, draft => {
            draft.status = fetchStates.error;
            draft.error = error;
        })
        expect(homePageReducer(state, loadRecipesError(error))).toEqual(expectedResult)
    })

    it('handles the loadRecipesByTag action correctly', function () {
        const expectedResult = produce(state, draft => {
            draft.status = fetchStates.fetching
        })

        expect(homePageReducer(state, loadRecipesByTag())).toEqual(expectedResult)
    });

    it('handles the loadRecipesByTagSuccess action correctly', function () {
        const expectedResult = produce(state, draft => {
            draft.status = fetchStates.success;
            draft.recipes = items;
            draft.totalPages = 1;
            draft.previousPage = previousPage;
            draft.nextPage = nextPage;
        })

        expect(homePageReducer(state, loadRecipesByTagSuccess({items, totalPages: 1, previousPage, nextPage}))).toEqual(expectedResult)
    });

    it('handles the loadRecipesByTagError action correctly', () => {
        const expectedResult = produce(state, draft => {
            draft.status = fetchStates.error;
            draft.error = error;
        })
        expect(homePageReducer(state, loadRecipesByTagError(error))).toEqual(expectedResult)
    })
})