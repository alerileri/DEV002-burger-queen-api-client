import { useState } from 'react'
import './App.css'
import LogoNB from './Components/LogoNB'


function App() {

  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <LogoNB />

      <form className='login-form'>
        <label className='label-form'>Email</label>
        <input placeholder='user@neonburger.com'></input>
        <label>Password</label>
        <input placeholder='password:9'></input>
        <button type='submit'>Login</button>
      </form>
{/* 
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
      </p> */ }
    </div>
  )
}

export default App
