import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Videopage from './components/Videopage.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResultApp from './resultApp.jsx'
import Try from './Try.jsx'
import Header from './components/Header.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />

  },
  {
    path: "/try",
    element: <Try />
  },
  {
    path: `/video/:videoId`,
    element: <Videopage />
  },
  {
    path: `/watch/:value`,
    element: <ResultApp />
  }
  ,
  {
    path: `/watch`,
    element: <ResultApp />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
