import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AdminPage from './Pages/AdminPage';
import ChefPage from './Pages/ChefPage';
import WaiterPage from './Pages/WaiterPage';
import Feed from './Pages/Feed';
import NotFound from './Pages/NotFound';
import LoginPage from './Pages/Login';


function App() {

  //const [count, setCount] = useState(0)
  //const [user, setUser] = useState(null);

  // if(!user){
  //   return 
  //     <Routes>
  //       <Route path="/" element={ <LoginPage setUser={setUser} />}></Route>
  //     </Routes>
  // };

  // if(user.rol === 'cocina') {
  //   return
  //   <Routes>
  //     <Route path="/" element={<ChefPage />} /></Route>
  //   </Routes>
  // }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
        <Route path="feed" element={<Feed />}></Route>
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
