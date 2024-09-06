import React from 'react';
import { render, screen } from '@testing-library/react';
import { Register } from './Register';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

describe("Login testing", ()=>{
    it("Should render the component", ()=>{
        render(<BrowserRouter><Register/></BrowserRouter>);
        const RegisterID = screen.getByText(/Register in GoGreen/i);
        expect(RegisterID).toBeInTheDocument();
    })
})

