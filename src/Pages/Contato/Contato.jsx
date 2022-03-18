/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Contato.css";
import { useEffect, useState } from "react"
import api from '../../api'

export default () => {

  const [contato, setContato] = useState({

    nome: "",
    email: "",
    formulario: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    api.post('/contato', contato)
  }

  useEffect(() => { console.log(contato) }, [contato])


  return (
    <container>
      <Navbar />
      <div className="Form">
        <form>
          <label>Nome Completo</label>
          <input type="text" className="validate" onChange={(event) => setContato({ ...contato, nome: event.target.value })} />

          <label >E-mail</label>
          <input type="text" class="validate" onChange={(event) => setContato({ ...contato, email: event.target.value })} />

          <textarea id="story" name="story" rows="10" cols="66" onChange={(event) => setContato({ ...contato, formulario: event.target.value })}>
            {" "}
          </textarea>
          <input onClick={handleSubmit} type="submit" value="ENVIAR" />
        </form>
      </div>
      <Footer />
    </container>
  );
};

