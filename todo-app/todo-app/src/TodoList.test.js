import React from "react";
import {render, fireEvent} from '@testing-library/react'
import TodoList from "./TodoList";

it("should render without crashing", () => {
    render(<TodoList />)
})

//snapshot test below