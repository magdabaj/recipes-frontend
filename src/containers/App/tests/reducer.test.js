import { produce } from "immer";
import appReducer from "../reducer";
import { loadTags, loadTagsError, loadTagsSuccess } from "../actions";
import {beforeEach, describe, expect} from "@jest/globals";
import fetchStates from "../../../utils/fetchStates";

describe('appReducer', () => {
    let state;
    beforeEach (() => {
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

    it('should return the initial state', () => {
        expect(appReducer(undefined, {})).toEqual(state);
    })

    it('should handle the loadTags action correctly', () => {
        const expectedResult = produce(state, draft => {
            draft.status = fetchStates.fetching;
        })
        expect(appReducer(state, loadTags())).toEqual(expectedResult);
    })

    it('should handle the loadTagsSuccess action correctly', () => {
        const tags = ['test'];
        const expectedResult = produce(state, draft => {
            draft.tags = tags;
            draft.status = fetchStates.success;
        })
        expect(appReducer(state, loadTagsSuccess(tags))).toEqual(expectedResult)
    });

    it('should handle the loadTagsError action correctly', () => {
        const error = 'Some error';
        const expectedResult = produce(state, draft => {
            draft.error = error;
            draft.status = fetchStates.error;
        })
        expect(appReducer(state, loadTagsError(error))).toEqual(expectedResult)
    });
})