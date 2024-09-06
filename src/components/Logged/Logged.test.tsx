import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Logged } from './Logged';
import { BrowserRouter } from 'react-router-dom';
import { DBContext } from '../../DataBase/database';
import "@testing-library/jest-dom"

//Had to mock the context provided with below settings and fake data


describe("Logged testing", () => {
    it("Should render the component with mocked context", () => {
        render(
            <DBContext.Provider  value={{ 
                users: [],
                setUsers: jest.fn(),
                logged: { name: "Max", email: "max@example.com", password: "password" }, 
                setLogged: jest.fn()
                }}>
                <BrowserRouter>
                    <Logged />
                </BrowserRouter>
            </DBContext.Provider>
        );

        const LoggedID = screen.getByText(/you are now logged!/i);
        expect(LoggedID).toBeInTheDocument();

        const LoggedUser = screen.getByText(/Max/i);
        expect(LoggedUser).toBeInTheDocument();
    })
})


