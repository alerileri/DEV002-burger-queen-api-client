import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AdminPage from './Pages/AdminPage'
import ChefPage from './Pages/ChefPage'
import WaiterPage from './Pages/WaiterPage'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <h1>Home</h1>,
//   },
//   {
//     path: '/about',
//     element: <h1>About</h1>,
//   },
//   {
//     path: '/contact',
//     element: <h1>Contact</h1>,
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
