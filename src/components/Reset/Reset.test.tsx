import React from 'react';
import { render, screen } from '@testing-library/react';
import { Reset } from './Reset';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

describe("Login testing", ()=>{
    it("Should render the component", ()=>{
        render(<BrowserRouter><Reset/></BrowserRouter>);
        const ResetID = screen.getByText(/Change your password to make the world a better place/i);
        expect(ResetID).toBeInTheDocument();
    })
})

