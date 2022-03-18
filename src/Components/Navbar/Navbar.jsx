/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
export default () => {
  return (
    <header className="navbar">
      <div className="avatar">
        <div className="avatar">
          <div><h1>AGÊNCIA DE VIAGENS ETHERNUM</h1></div>
        </div>
      </div >

      <div className="nav">

        <Link to="/">
          <a>Home</a>
        </Link>

        <Link to="/Destino">
          <a>Destino</a>
        </Link>

        <Link to="/Contato">
          <a>Contato</a>
        </Link>

        <Link to="/Promocoes">
          <a>Promoções</a>
        </Link>
      </div>
    </header >
  );
}

