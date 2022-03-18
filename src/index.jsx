import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Destino from './Pages/Destino/Destino'
import Contato from './Pages/Contato/Contato'
import Promocoes from './Pages/Promocoes/Promocoes'
import Cdestino from './Pages/CrudDestino/Cdestino'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Destino" element={<Destino />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>
        <Route path="/Promocoes" element={<Promocoes />}></Route>
        <Route path="/Cdestino" element={<Cdestino />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
