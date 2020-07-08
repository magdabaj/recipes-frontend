import {loadRecipesSaga} from "../saga";
import {expect} from "@jest/globals";
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import {LOAD_RECIPES} from "../constants";

describe('HomePage saga', () => {
    let loadRecipesSagaGenerator;

    beforeEach(() => {
        loadRecipesSagaGenerator = loadRecipesSaga(/*{type: LOAD_RECIPES,page: 1}*/)

        const callDescriptor = loadRecipesSagaGenerator.next().value
        expect(callDescriptor).toMatchSnapshot()

        const callPageDescriptor = loadRecipesSagaGenerator.next({ page: 1 }).value;
        expect(callPageDescriptor).toMatchSnapshot()
    })
})