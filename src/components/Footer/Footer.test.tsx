import { render, screen, fireEvent } from '@testing-library/react';
import { Footer } from './Footer';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

// Mocking the Footer module and importing everything to be able to spy on internal functions
jest.mock('./Footer', () => {
    const originalModule = jest.requireActual('./Footer');
    return {
        ...originalModule,
    };
});

describe("Footer testing", ()=>{
    const mockDeleteUsers = jest.fn()

    it("Should render the component", ()=>{
        render(<BrowserRouter><Footer/></BrowserRouter>);
        const footerID = screen.getByText(/Terms of Use/i);
        expect(footerID).toBeInTheDocument();
    });

    test("Should call the delete function", () => {
        // Directly mock the local deleteUsers function inside Footer using jest.spyOn
        const deleteUsersSpy = jest.spyOn(window.localStorage.__proto__, 'clear');

        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        const logoImg = screen.getByTitle("Click here to delete all users from the DB");
        fireEvent.click(logoImg);

        expect(deleteUsersSpy).toHaveBeenCalled(); // Check if deleteUsers was called

        // Cleanup the spy after the test to avoid side effects
        deleteUsersSpy.mockRestore();
    });
})

