import './App.css';
import oceanImage from "./images/ocean.png"
import { Routes, Route } from 'react-router-dom';
import { Reset } from './components/Reset/Reset';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logged } from './components/Logged/Logged';

function App() {
  return (
    <div className="App">
      <div className="main-div">
        <div>
          <img src={oceanImage}></img>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/ChangePassword" element={<Reset/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Logged" element={<Logged/>}/>
          </Routes>
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;



/*

Register page 
Login page 
Change password page 

#1e1b62


*/