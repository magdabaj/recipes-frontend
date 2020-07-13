import {put} from "redux-saga/effects";
import {loadTagsError, loadTagsSuccess} from "../actions";
import {loadTagsSaga} from '../saga'
import {beforeEach, describe, expect} from "@jest/globals";

describe('loadTags saga', () => {
    let loadTagsGenerator;

    beforeEach(() => {
        loadTagsGenerator = loadTagsSaga();

        const selectDescriptor = loadTagsGenerator.next().value;
        expect(selectDescriptor).toMatchSnapshot();
    })

    it('should dispatch the loadTagsSuccess action if it requests the data successfully', function () {
        const response = [
            {
                id: 1,
            },
            {
                id: 2,
            }
        ]
        const putDescriptor = loadTagsGenerator.next(response).value;
        expect(putDescriptor).toEqual(put(loadTagsSuccess(response)))
    });

    it('should dispatch the loadTagsError action if the request fails', function () {
        const response = new Error('some error');
        const putDescriptor = loadTagsGenerator.throw(response).value;
        expect(putDescriptor).toEqual(put(loadTagsError(response.message)))
    });
})