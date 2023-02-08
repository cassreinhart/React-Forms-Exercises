import React from "react";
import {render, fireEvent} from '@testing-library/react'
import NewBoxForm from "./NewBoxForm";

it("should render without crashing", () => {
    render(<NewBoxForm />)
})

//snapshot test below