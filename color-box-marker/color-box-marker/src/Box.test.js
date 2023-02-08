import React from "react";
import {render, fireEvent} from '@testing-library/react'
import Box from "./Box";

it("should render without crashing", () => {
    render(<Box />)
})

//snapshot test below