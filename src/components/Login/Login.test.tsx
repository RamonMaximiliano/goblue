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

describe("Login testing", () => {
    const mockNavigate = jest.fn();

    // Mocking useNavigate:
    /*This block defines a function that runs before each test in the "Login testing" suite. It's a good practice to set up your test environment here.*/
    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
        jest.clearAllMocks(); // Clear mocks before each test
    });

    //TEST 1 - render the component
    it("Should render the component", () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        const LoginID = screen.getByText(/Welcome to GoGreen/i);
        expect(LoginID).toBeInTheDocument();
    });
 
     //TEST 2 - Email and password are being provided
    test('Email and password are being provided', () => {
         const mockSetLogged = jest.fn();

        const mockUsers = [
            { name: 'John Doe', email: 'john@example.com', password: 'password123' },
        ];

        render(
            <DBContext.Provider value={{
                users: mockUsers,
                setLogged: mockSetLogged
            }}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </DBContext.Provider>
        );
       
        // Simulate entering email
        const emailInput = screen.getByPlaceholderText('Email');
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        expect(emailInput).toHaveValue('john@example.com'); // Check value

        // Simulate entering password
        const passwordInput = screen.getByPlaceholderText('Password');
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        expect(passwordInput).toHaveValue('password123'); // Check value

        // Click the "Sign In" button
        fireEvent.click(screen.getByText('Sign In'));

        // Debugging: Check whether loginIn function sets the state and calls navigate
        expect(mockSetLogged).toHaveBeenCalledWith(mockUsers[0]); // Check setLogged call
        expect(mockNavigate).toHaveBeenCalledWith('/Logged'); // Check navigation call
    })
})

