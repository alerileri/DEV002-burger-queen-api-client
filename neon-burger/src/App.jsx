import { Routes, Route } from 'react-router-dom';
//import { useState } from 'react'
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LogoNB from './Components/LogoNB'
import AdminPage from './Pages/AdminPage';
import ChefPage from './Pages/ChefPage';
import WaiterPage from './Pages/WaiterPage';
import < WaiterPage


function App() {

  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
        <Route path="admin" element={<Feed />}></Route>
        <Route path="admin" element={<AdminPage />}></Route>
        <Route path="chef" element={<ChefPage />}></Route>
        <Route path="waiter" element={<WaiterPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>

//{
  /* 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */ 
    //}
  );
};

export default App
