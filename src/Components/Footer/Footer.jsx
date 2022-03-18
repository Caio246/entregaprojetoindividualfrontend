/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <footer>
      <div className="icons">
        <div className="instagram">
          <Link to="https://www.instagram.com">
          </Link>
          <i className="bi bi-instagram"></i>
        </div>
        <div className="facebook">
          <Link to="https://www.facebook.com">
          </Link>
          <i className="bi bi-facebook"></i>
        </div>
        <div className="celular">
          <i className="bi bi-camera-fill"></i>
        </div>
      </div>
      <p>
        Feito com por <strong>Caio Custódio Moreira</strong>
      </p>
    </footer>

  );
}