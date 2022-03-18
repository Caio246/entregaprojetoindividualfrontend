/* eslint-disable react/jsx-no-undef */
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import { Table } from "react-bootstrap"
import "./Cdestino.css"
import api from '../../api'
import { useEffect, useState } from "react"

/* eslint-disable import/no-anonymous-default-export */

export default () => {

  const [list, setList] = useState([])

  useEffect(() => {
    api.get("/destino").then(response => {
      setList(response.data)
    })
  })

  return (
    <>
      <Navbar />
      <div className="crud-destino">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>telefone</th>
              <th>CPF</th>
              <th>E-mail</th>
              <th>Local de Partida</th>
              <th>Data de partida</th>
              <th>Local e chegada</th>
              <th>Data de chegada</th>
            </tr>
          </thead>
          <tbody>
            {list.map(usuario => {
              return (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.telefone}</td>
                  <td>{usuario.cpf}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.localdepartida}</td>
                  <td>{usuario.datadepartida}</td>
                  <td>{usuario.localdedestino}</td>
                  <td>{usuario.datadechegada}</td>
                </tr>
              )
            })}

          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  )
}

