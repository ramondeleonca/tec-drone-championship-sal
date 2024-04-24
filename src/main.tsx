import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './routes/Index'
import "./global.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Index}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
