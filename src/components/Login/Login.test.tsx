import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from './Login';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

describe("Login testing", ()=>{
    it("Should render the component", ()=>{
        render(<BrowserRouter><Login/></BrowserRouter>);
        const LoginID = screen.getByText(/Welcome to GoGreen/i);
        expect(LoginID).toBeInTheDocument();
    })
})

