import React from "react";
import {render, fireEvent} from '@testing-library/react'
import BoxList from "./BoxList";

it("should render without crashing", () => {
    render(<BoxList />)
})

//snapshot test below