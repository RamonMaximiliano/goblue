import './App.css';
import oceanImage from "./images/ocean.png"
import { Routes, Route } from 'react-router-dom';
import { Reset } from './components/Reset/Reset';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logged } from './components/Logged/Logged';
import { Footer } from './components/Footer/Footer';
import { DbProvider } from './DataBase/database';

function App() {
  return (
    <>
    <DbProvider>
      <Routes>
        <Route path="/Logged" element={<Logged />} />
        <Route path="*"
          element={
            <div className="App">
              <div className="main-div">
                <div className="main-img" style={{ backgroundImage: `url(${oceanImage})` }}></div>
                <div className="main-side">
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/ChangePassword" element={<Reset />} />
                    <Route path="/Register" element={<Register />} />
                  </Routes>
                </div>
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
      </DbProvider>
    </>
  );
}

export default App;


/*

https://josiaspereira.com.br/como-usar-localstorage-no-reactjs/
https://reactrouter.com/en/main/hooks/use-navigate

TESTS:

### 1. **Unit Tests**

These tests focus on individual functions and components to ensure they behave as expected.


REWRITE THE LOGIN TEST TO MEMORIZE DETAILS 

- **Form Validation Tests**
  - Ensure that required fields (like username, email, and password) are validated correctly.
  - Test validation for incorrect inputs (e.g., invalid email format, weak passwords).
  - Ensure error messages are displayed appropriately.

- **API Interaction Tests**
  - Mock API calls for registration, login, update, and delete actions.
  - Test success and error responses from the API.
  - Verify that the correct data is sent to the API endpoints.

  
### 2. **Integration Tests**

These tests ensure that the components work together correctly.

- **User Registration Flow**
  - Simulate user interaction by filling out the registration form and submitting it.
  - Mock the API response and verify that the user is registered and redirected correctly.
  - Ensure that success and error messages are shown based on the API response.

- **User Login Flow**
  - Test the login form by simulating user input and form submission.
  - Mock the API response to check if the user is authenticated and redirected to the dashboard.
  - Verify that error messages appear when credentials are incorrect.

- **User Update Flow**
  - Test the user update functionality by simulating the form fill-out and submission.
  - Mock the API response to ensure the user's data is updated and displayed correctly.
  - Check that appropriate feedback (e.g., success or error messages) is shown.

- **User Deletion Flow**
  - Test the delete user functionality by triggering the delete action.
  - Mock the API response to ensure the user is deleted and the UI updates accordingly.
  - Ensure the user is logged out or redirected to a relevant page after deletion.

### 3. **Edge Case Tests**

These tests ensure your application handles unexpected or extreme situations.

- **Empty Form Submission**
  - Test what happens when the forms are submitted with no data.
  - Ensure that validation messages are shown and no API calls are made.

- **Duplicate User Registration**
  - Simulate a scenario where a user tries to register with an already existing username or email.
  - Ensure that the correct error message is displayed.

- **Session Expiry**
  - Test how your application handles expired sessions. Ensure users are logged out and redirected to the login page if they try to perform actions after the session expires.

### 4. **Accessibility Tests**
  - Verify that your components and pages are accessible (e.g., ARIA labels, keyboard navigation).
  - Ensure that screen readers can properly navigate and read your content.

### 5. **Performance Tests (Optional)**
  - If applicable, write tests to ensure that key actions (like login or registration) perform well under load.






  

FINISHED:

### 1. **Unit Tests**

**Component Rendering Tests**
Test if each component (e.g., LoginForm, RegisterForm, UpdateUserForm) renders correctly.
Ensure that UI elements like buttons, input fields, and error messages are displayed as expected.



  
*/