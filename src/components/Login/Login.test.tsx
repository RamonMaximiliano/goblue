import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from './Login';
import { BrowserRouter } from 'react-router-dom';
import { DBContext } from '../../DataBase/database';
import { useNavigate } from 'react-router-dom';
import "@testing-library/jest-dom"

// Mocking useNavigate from react-router-dom:
/*This line mocks the entire react-router-dom module. It creates a copy and replaces the useNavigate function with a Jest mock function (.fn()). This mock function will behave differently than the original useNavigate.*/
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe("Login component", () => {

    //TEST 1 - render the component
    it("Should render the component", () => {
        render(<BrowserRouter><Login /></BrowserRouter>)
        //Below regex is getting whatever element with that text even if there is soemthing after or before the text provided
        const LoginText = screen.getByText(/(.*)Welcome to GoGre(.*)/i);
        expect(LoginText).toBeInTheDocument();
    })

    //TEST 2 - Email and password are being provided
    describe("Email and password are being provided when clicking Login", () => {

        //SUB-TEST 1 - Email being provided
        test("Simulate entering email", () => {
            //Mocking a fake function, this is necessary for the context provider below
            const mockSetLogged = jest.fn();

            //mocking a fake user to be provided in the context, this is necessary for the context provider below
            const mockUsers = [
                { name: 'John Doe', email: 'john@example.com', password: 'password123' },
            ];

            render(
                <DBContext.Provider value={{
                    users: mockUsers,
                    setLogged: mockSetLogged
                }}>
                    <BrowserRouter><Login /></BrowserRouter>
                </DBContext.Provider>
            );
            // Simulate entering email
            const emailInput = screen.getByPlaceholderText('Email');
            fireEvent.change(emailInput, { target: { value: "maria@example.com" } });
            expect(emailInput).toHaveValue("maria@example.com");
        })

        //SUB-TEST 2 - password being provided
        test("Simulate entering password", () => {
            //Mocking a fake function, this is necessary for the context provider below
            const mockSetLogged = jest.fn();

            //mocking a fake user to be provided in the context, this is necessary for the context provider below
            const mockUsers = [
                { name: 'John Doe', email: 'john@example.com', password: 'password123' },
            ];

            render(
                <DBContext.Provider value={{
                    users: mockUsers,
                    setLogged: mockSetLogged
                }}>
                    <BrowserRouter><Login /></BrowserRouter>
                </DBContext.Provider>
            );
            // Simulate entering password
            const passwordInput = screen.getByPlaceholderText('Password');
            fireEvent.change(passwordInput, { target: { value: "randomPassword123" } });
            expect(passwordInput).toHaveValue("randomPassword123");
        })

        test("empty input EMAIL should trigger error message", () => {
            //Mocking a fake function, this is necessary for the context provider below
            const mockSetLogged = jest.fn();

            //mocking a fake user to be provided in the context, this is necessary for the context provider below
            const mockUsers = [
                { name: 'John Doe', email: 'john@example.com', password: 'password123' },
            ];

            // Mocking window.alert because Jest and Testing Library don't natively render or interact with browser alert dialogs (window.alert, window.confirm, etc.) because these are handled by the browser, not the DOM.
            window.alert = jest.fn();

            render(
                <DBContext.Provider value={{
                    users: mockUsers,
                    setLogged: mockSetLogged
                }}>
                    <BrowserRouter><Login /></BrowserRouter>
                </DBContext.Provider>
            );

            // Simulate entering email
            const emailInput = screen.getByPlaceholderText('Email');
            fireEvent.change(emailInput, { target: { value: '' } });

            // Simulate entering password
            const passwordInput = screen.getByPlaceholderText('Password');
            fireEvent.change(passwordInput, { target: { value: 'password123' } });

            // Simulate clicking 'Sign In' 
            fireEvent.click(screen.getByText('Sign In'));

            // Check if alert was called with the expected message
            expect(window.alert).toHaveBeenCalledWith("User not found or wrong password!");

        });

        test("empty input PASSWORD should trigger error message", () => {
            //Mocking a fake function, this is necessary for the context provider below
            const mockSetLogged = jest.fn();

            //mocking a fake user to be provided in the context, this is necessary for the context provider below
            const mockUsers = [
                { name: 'John Doe', email: 'john@example.com', password: 'password123' },
            ];

            // Mocking window.alert because Jest and Testing Library don't natively render or interact with browser alert dialogs (window.alert, window.confirm, etc.) because these are handled by the browser, not the DOM.
            window.alert = jest.fn();

            render(
                <DBContext.Provider value={{
                    users: mockUsers,
                    setLogged: mockSetLogged
                }}>
                    <BrowserRouter><Login /></BrowserRouter>
                </DBContext.Provider>
            );

            // Simulate entering email
            const emailInput = screen.getByPlaceholderText('Email');
            fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

            // Simulate entering password
            const passwordInput = screen.getByPlaceholderText('Password');
            fireEvent.change(passwordInput, { target: { value: '' } });

            // Simulate clicking 'Sign In' 
            fireEvent.click(screen.getByText('Sign In'));

            // Check if alert was called with the expected message
            expect(window.alert).toHaveBeenCalledWith("Missing password or password incorrect!");

        })

    })

    //TEST 3 - Click the "Sign In" button, sets the state and calls navigate
    describe("'Sign In' button function sets the state and calls navigate", () => {
        const mockNavigate = jest.fn();
        // Mocking useNavigate:
        /*This block defines a function that runs before each test in the "Login testing" suite. It's a good practice to set up your test environment here.*/
        beforeEach(() => {
            (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
            jest.clearAllMocks(); // Clear mocks before each test
        });

        //SUB-TEST 1 - Set the logged user whern clicking "Sign In" button 
        it("Should set the logged user and navigate", () => {
            //Mocking a fake function, this is necessary for the context provider below
            const mockSetLogged = jest.fn();


            //mocking a fake user to be provided in the context, this is necessary for the context provider below
            const mockUsers = [
                { name: 'John Doe', email: 'john@example.com', password: 'password123' },
            ];

            render(
                <DBContext.Provider value={{
                    users: mockUsers,
                    setLogged: mockSetLogged
                }}>
                    <BrowserRouter><Login /></BrowserRouter>
                </DBContext.Provider>
            );

            // Simulate entering email
            const emailInput = screen.getByPlaceholderText('Email');
            fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

            // Simulate entering password
            const passwordInput = screen.getByPlaceholderText('Password');
            fireEvent.change(passwordInput, { target: { value: 'password123' } });

            // Simulate clicking 'Sign In' 
            fireEvent.click(screen.getByText('Sign In'));
            expect(mockSetLogged).toHaveBeenCalledWith(mockUsers[0]);

            // Check navigation call
            expect(mockNavigate).toHaveBeenCalledWith('/Logged');
        })

    });
});







