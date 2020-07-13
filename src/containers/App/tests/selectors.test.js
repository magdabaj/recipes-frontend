import { selectAppDomain, makeSelectTags } from '../selectors';
import {describe, expect, it} from "@jest/globals";
import fetchStates from "../../../utils/fetchStates";

describe('selectAppDomain', () => {
    it('should select app state', () => {
        const appState = {
                appReducer: {
                    error: null,
                    nextPage: null,
                    page: 1,
                    previousPage: null,
                    recipes: [],
                    status: fetchStates.fetching,
                    tags: [],
                    totalPages: null,
                }
        };
        expect(selectAppDomain(appState)).toEqual(appState.appReducer);
    })
})

// describe('makeSelectApp', () => {
//     it('should select app', () => {
//         const appState = {
//             error: null,
//             nextPage: null,
//             page: 1,
//             previousPage: null,
//             recipes: [],
//             status: fetchStates.fetching,
//             tags: [],
//             totalPages: null,
//         };
//         const mockedState = {};
//         expect(makeSelectApp(mockedState)).toEqual(appState);
//     })
// })

describe('makeSelectTags', () => {
    const currentTagsSelector = makeSelectTags();
    it('should select tags', () => {
        const mockedTags = [{id: 'test'}, {id: 'test'}];
        const mockedState = {
            appReducer: {
                tags: mockedTags
            },
        };
        expect(currentTagsSelector(mockedState)).toEqual(mockedTags);
    })
})