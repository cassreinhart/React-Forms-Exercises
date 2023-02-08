import React from "react";
import {render, fireEvent} from '@testing-library/react'
import NewBoxForm from "./NewBoxForm";

it("should render without crashing", () => {
    render(<NewBoxForm />)
})

//snapshot test below
it('should match snapshot', () => {
    const {asFragment} = render(<NewBoxForm />)
    expect(asFragment()).toMatchSnapshot()
})

it('should handle changes to each input value', () => {

})

it('should handle form submission', () => {
    
})