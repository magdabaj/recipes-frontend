import {
    LOAD_RECIPES,
    LOAD_RECIPES_BY_TAG, LOAD_RECIPES_BY_TAG_ERROR,
    LOAD_RECIPES_BY_TAG_SUCCESS,
    LOAD_RECIPES_ERROR,
    LOAD_RECIPES_SUCCESS
} from "../constants";
import {
    loadRecipes,
    loadRecipesByTag,
    loadRecipesByTagError,
    loadRecipesByTagSuccess,
    loadRecipesError,
    loadRecipesSuccess
} from "../actions";


describe('HomePage actions', () => {
    const error = 'some error'

    it('handles loadRecipes action with page number', () => {
        const expected = {
            type: LOAD_RECIPES,
            page: 1
        }

        expect(loadRecipes(1)).toEqual(expected)
    })

    it('handles loadRecipes action', () => {
        const expected = {
            type: LOAD_RECIPES,
        }

        expect(loadRecipes()).toEqual(expected)
    })

    it('should handle loadRecipesSuccess action correctly', function () {
        const expected = {
            type: LOAD_RECIPES_SUCCESS,
            response: {}
        }
        expect(loadRecipesSuccess({})).toEqual(expected)
    });

    it('should handle loadRecipesError action correctly', function () {
        const expected = {
            type: LOAD_RECIPES_ERROR,
            error: error
        }
        expect(loadRecipesError(error)).toEqual(expected)
    });

    it('handles loadRecipesByTag action', () => {
        const expected = {
            type: LOAD_RECIPES_BY_TAG,
            tagId: 1,
            page: 1
        }

        expect(loadRecipesByTag(1, 1)).toEqual(expected)
    })

    it('handles loadRecipesByTag action', () => {
        const expected = {
            type: LOAD_RECIPES_BY_TAG,
            tagId: 1,
        }

        expect(loadRecipesByTag(1)).toEqual(expected)
    })

    it('should handle loadRecipesByTagSuccess action correctly', function () {
        const expected = {
            type: LOAD_RECIPES_BY_TAG_SUCCESS,
            response: {}
        }
        expect(loadRecipesByTagSuccess({})).toEqual(expected)
    });

    it('should handle loadRecipesByTagError action correctly', function () {
        const expected = {
            type: LOAD_RECIPES_BY_TAG_ERROR,
            error: error
        }
        expect(loadRecipesByTagError(error)).toEqual(expected)
    });
})