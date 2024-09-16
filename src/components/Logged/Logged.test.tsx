import { render, screen, fireEvent } from '@testing-library/react';
import { Logged } from './Logged';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
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

    test("Should go back to login page upon click",()=>{
        render(
            <DBContext.Provider  value={{ 
                users: [],
                setUsers: jest.fn(),
                logged: { name: "Max", email: "max@example.com", password: "password" }, 
                setLogged: jest.fn()
                }}>
          {/* By setting initialEntries={['/logged']}, the router behaves as if the App is on the /logged page when the test starts. This simulates the user being logged in and viewing the "Logged" page. */}
                <MemoryRouter initialEntries={['/logged']}>
                    <Logged />
                </MemoryRouter>
            </DBContext.Provider>
        );
        const backLogin = screen.getByText(/Back to Login/i);
        expect(backLogin).toBeInTheDocument();
        fireEvent.click(backLogin);
        // Check that navigation happened
        expect(window.location.pathname).toBe("/");
    })

    test("Delete user successfully upon click",()=>{
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
        // Mock the window alert
        window.alert = jest.fn();
        const deleteUser = screen.getByText(/Delete my User/i);
        expect(deleteUser).toBeInTheDocument();
        fireEvent.click(deleteUser);
        // Ensure the alert was shown
        expect(window.alert).toHaveBeenCalledWith("User deleted successfully!");
    })

})


