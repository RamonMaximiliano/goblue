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

Responsiveness
Delete all users from browser
lowercase validation for e-mail

https://josiaspereira.com.br/como-usar-localstorage-no-reactjs/
https://reactrouter.com/en/main/hooks/use-navigate


*/