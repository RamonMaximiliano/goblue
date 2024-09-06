import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

describe("Footer testing", ()=>{
    it("Should render the component", ()=>{
        render(<BrowserRouter><Footer/></BrowserRouter>);
        const footerID = screen.getByText(/Terms of Use/i);
        expect(footerID).toBeInTheDocument();
    })
})

