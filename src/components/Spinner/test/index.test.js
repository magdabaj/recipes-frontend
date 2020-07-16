import React from "react";
import { render } from "@testing-library/react";
import Spinner from "../index";
import commonTests from "../../../utils/testHelpers/commonTests";

const renderSpinner = () =>
    render(<Spinner/>)

commonTests(renderSpinner)