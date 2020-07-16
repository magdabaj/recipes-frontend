import {renderWithRouter} from "../../../utils/testHelpers";
import { screen } from "@testing-library/dom";
import TagComponent from "../index";
import {fakeTags} from "../../../utils/testHelpers/fixtures/tags";
import React from "react";
import commonTests from "../../../utils/testHelpers/commonTests";
import userEvent from "@testing-library/user-event";

const renderTagComponent = () =>
    renderWithRouter(<TagComponent tags={fakeTags} tagType={'alkohol'}/>)

commonTests(renderTagComponent)

test('shows tagValues after on click', () => {
    const {history} = renderTagComponent()

    const tagType = screen.getByText(/alkohol/i)

    userEvent.click(tagType)
    const tagValue1 = screen.getByText(/rum/i)
    const tagValue2 = screen.getByText(/wino/i)
    expect(tagValue1).toBeInTheDocument()
    expect(tagValue2).toBeInTheDocument()

    userEvent.click(tagValue2)
    expect(history.location.pathname).toBe('/tag/2')
})