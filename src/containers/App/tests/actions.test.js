import { LOAD_TAGS, LOAD_TAGS_ERROR, LOAD_TAGS_SUCCESS, LOAD_RECIPES_ERROR } from "../constants";
import { loadTags, loadTagsError, loadTagsSuccess, loadRecipesError } from "../actions";
import {describe, expect} from "@jest/globals";

describe('App Actions', () => {
    describe('loadTags', () => {
        it('should return the correct type', () => {
            const expectedResult = {
                type: LOAD_TAGS,
            };

            expect(loadTags()).toEqual(expectedResult);
        });
    });
});

describe('App Actions', () => {
    describe('loadTagsSuccess', () => {
        it('should return the correct type and tags', () => {
            const tags = ['test'];
            const expectedResult = {
                type: LOAD_TAGS_SUCCESS,
                tags
            };

            expect(loadTagsSuccess(tags)).toEqual(expectedResult);
        });
    });
});

describe('App Actions', () => {
    describe('loadTagsError', () => {
        it('should return the correct type and error', () => {
            const error = 'Something went wrong'
            const expectedResult = {
                type: LOAD_TAGS_ERROR,
                error
            };

            expect(loadTagsError(error)).toEqual(expectedResult);
        });
    });
});

describe('App Actions', () => {
    describe('loadRecipesError', () => {
        it('should return the correct type and error', () => {
            const error = 'Something went wrong'
            const expectedResult = {
                type: LOAD_RECIPES_ERROR,
                error
            };

            expect(loadRecipesError(error)).toEqual(expectedResult);
        });
    });
});