import React from "react";
import {render, fireEvent} from '@testing-library/react'
import NewTodoForm from "./NewTodoForm";

it("should render without crashing", () => {
    render(<NewTodoForm />)
})

//snapshot test below