import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { Reset } from './Reset';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { DBContext } from '../../DataBase/database';
import "@testing-library/jest-dom"

describe("Login testing", ()=>{
    it("Should render the component", ()=>{
        render(<BrowserRouter><Reset/></BrowserRouter>);
        const ResetID = screen.getByText(/Change your password to make the world a better place/i);
        expect(ResetID).toBeInTheDocument();
    });

    test("If click 'Login now' takes back to Login",()=>{
        render(
            <DBContext.Provider  value={{ 
                users: [],
                setUsers: jest.fn(),
                logged: { name: "Max", email: "max@example.com", password: "password" }, 
                setLogged: jest.fn()
                }}>
          {/* By setting initialEntries={['/logged']}, the router behaves as if the App is on the /logged page when the test starts. This simulates the user being logged in and viewing the "Logged" page. */}
                <MemoryRouter initialEntries={['/Reset']}>
                    <Reset />
                </MemoryRouter>
            </DBContext.Provider>
        );
        const backLogin = screen.getByText(/Login now/i);
        expect(backLogin).toBeInTheDocument();
        fireEvent.click(backLogin);
        // Check that navigation happened
        expect(window.location.pathname).toBe("/");
    })

})

