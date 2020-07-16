import Select from "../index";
import { render } from "@testing-library/react";
import {fakeTags} from "../../../utils/testHelpers/fixtures/tags";
import React from "react";
import commonTests from "../../../utils/testHelpers/commonTests";

const renderSelect = () =>
    render(<Select tags={fakeTags} tagType={'alkohol'} onChange={jest.fn()}/>)

commonTests(renderSelect)