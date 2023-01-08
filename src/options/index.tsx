import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}>
          List configs
        </NavLink>
        <NavLink
          to="/addConfig"
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
        >
          Add config
        </NavLink>
        <NavLink
          to="/editConfig"
          style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)}
        >
          Edit config
        </NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<h1>LIST configurations</h1>} />
        <Route path="/addConfig" element={<h1>ADD configuration</h1>} />
        <Route path="/editConfig" element={<h1>EDIT configuration</h1>} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
