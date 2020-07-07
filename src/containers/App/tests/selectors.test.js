import { selectAppDomain } from '../selectors'
import {describe, expect} from "@jest/globals";
import fetchStates from "../../../utils/fetchStates";

describe('selectAppDomain', () => {
    it('should select app state', () => {
        const appState = {
            error: null,
            nextPage: null,
            page: 1,
            previousPage: null,
            recipes: [],
            status: fetchStates.fetching,
            tags: [],
            totalPages: null,
        };
        const mockedState = {
            // global: appState,
        };
        expect(selectAppDomain(mockedState)).toEqual(appState);
    })
})