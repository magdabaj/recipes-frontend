
import { makeSelectStatus, makeSelectNextPage, makeSelectTotalPages, makeSelectPreviousPage, makeSelectRecipes } from "../selectors";
import fetchStates from "../../../utils/fetchStates";
import {fakeNextPage, fakePreviousPage} from "../../../utils/testHelpers/fixtures/page";
import { fakeRecipes } from "../../../utils/testHelpers/fixtures/recipes";

describe('makeSelectStatus', () => {
    const status = makeSelectStatus();
    it('selects status', () => {
        const mockedState = {
            homePageReducer: {
                status: fetchStates.success
            }
        }
        expect(status(mockedState)).toEqual(fetchStates.success)
    })

    it('should select next page', function () {
        const selectNextPage = makeSelectNextPage();
        const mockedState = {
            homePageReducer: {
                nextPage: fakeNextPage
            }
        }
        expect(selectNextPage(mockedState)).toEqual(fakeNextPage)
    });

    it('should select previous page', () => {
        const selectPreviousPage = makeSelectPreviousPage();
        const mockedState = {
            homePageReducer: {
                previousPage: fakePreviousPage
            }
        }
        expect(selectPreviousPage(mockedState)).toEqual(fakePreviousPage)
    })

    it('should select total pages', function () {
        const selector = makeSelectTotalPages();
        const mockedState = {
            homePageReducer: {
                totalPages: 4
            }
        }
        expect(selector(mockedState)).toEqual(4)
    });

    it('selects recipes', () => {
        const selector = makeSelectRecipes();
        const mockedState = {
            homePageReducer: {
                recipes: fakeRecipes
            }
        }
        expect(selector(mockedState)).toEqual(fakeRecipes)
    })

    // it('selects page', () => {
    //     const selector = selectPage();
    //     const route = '/page/2'
    //         // todo how to test the params selectors
    //     expect(selector(route)).toEqual(2)
    // })

})