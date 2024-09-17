import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Reset } from './Reset';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { DBContext } from '../../DataBase/database';
import "@testing-library/jest-dom"

describe("Login testing", () => {

    it("Should render the component", () => {
        render(<BrowserRouter><Reset /></BrowserRouter>);
        const ResetID = screen.getByText(/Change your password to make the world a better place/i);
        expect(ResetID).toBeInTheDocument();
    });

    test("If click 'Login now' takes back to Login", () => {
        render(
            <DBContext.Provider value={{
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

    test("If new and confirm password input are the same", () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
        render(
            <DBContext.Provider value={{
                users: [{ name: "Maria", email: "maria@example.com", password: "maria123" }],
                setUsers: jest.fn(),
                logged: { name: "Maria", email: "maria@example.com", password: "maria123" },
                setLogged: jest.fn()
            }}>
                <BrowserRouter>
                    <Reset />
                </BrowserRouter>
            </DBContext.Provider>
        );

        const email = screen.getByPlaceholderText('Enter your email');
        fireEvent.change(email, { target: { value: "maria@example.com" } });
        expect(email).toHaveValue("maria@example.com");

        const password = screen.getByPlaceholderText('Old password');
        fireEvent.change(password, { target: { value: "maria123" } });
        expect(password).toHaveValue("maria123");

        const newPassInput = screen.getByPlaceholderText('New password');
        fireEvent.change(newPassInput, { target: { value: "newpass127" } });
        expect(newPassInput).toHaveValue("newpass127");

        const confirmPassInput = screen.getByPlaceholderText('Confirm password');
        fireEvent.change(confirmPassInput, { target: { value: "newpass123" } });
        expect(confirmPassInput).toHaveValue("newpass123");

        const changePassword = screen.getByText('Change Password');
        fireEvent.click(changePassword)

        // Check if the alert with the success message was called
        expect(alertMock).toHaveBeenCalledWith("The new passwords don't match!");

        // Cleanup the mock
        alertMock.mockRestore();

    })

})


/*

- Validate fields input
- confirm e-mail and old password
- confirm change upon clickling button


        const emptyEmail = screen.getByText("Please provide an E-mail!");
        const invalidEmail = screen.getByText("Please provide a valid E-mail address!");
        const userNotFound = screen.getByText("User not found!");
        const oldIncorrect = screen.getByText("The old password is incorrect! not found!");
        const differentErrorMessage = screen.getByText("The new passwords don't match!");
        const successMessage = screen.getByText("Password reset successfully!");

        expect(emptyEmail).not.toBeInTheDocument()
        expect(invalidEmail).not.toBeInTheDocument()
        expect(userNotFound).not.toBeInTheDocument()
        expect(oldIncorrect).not.toBeInTheDocument()
        expect(differentErrorMessage).not.toBeInTheDocument()
        expect(successMessage).toBeInTheDocument()

*/