/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import cidade from "../../Components/img/cidade.jpg"
import deserto from "../../Components/img/deserto.jpg"
import india from "../../Components/img/india.jpg"
import trem from "../../Components/img/trem.jpg"
import './Promocoes.css'
/* eslint-disable react/jsx-no-undef */

export default () => {
  return (


    <>
      <Navbar />
      <div className="carrossel">
        <ul className="lista">
          <div className="container-c">
            <ul>
              <img src={cidade} />
              <p className="titulo">VOOS PARA TURQUIA</p>
              <p className="precoida">Preço de ida e volta</p>
              <p>R$420</p>
            </ul>
            <ul>
              <img src={deserto} />
              <p className="titulo">VOOS PARA DUBAI</p>
              <p className="precoida">Preço de ida e volta</p>
              <p>R$200</p>
            </ul>
            <ul >
              <img src={india} />
              <p className="titulo">VOOS PARA ÍNDIA</p>
              <p className="precoida">Preço de ida e volta</p>
              <p>R$500</p>
            </ul >
            <ul>
              <img src={trem} />
              <p className="titulo">VOOS PARA HOLANDA</p>
              <p className="precoida">Preço de ida e volta</p>
              <p>R$900</p>
            </ul>
          </div>
        </ul>
      </div>
      <Footer />
    </>
  )
}