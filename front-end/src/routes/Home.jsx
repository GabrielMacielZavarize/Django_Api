import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
const Home = () => {
  const [data, setData] = useState([]);

  function renderizar (){
    axios.get('http://127.0.0.1:8000/alunos/')
    .then(response => setData(response.data))
    .catch(error => console.log(error));
  }
  useEffect(renderizar,[]);
  return (
    <div className="container">
      <h1>Pessoas Cadastradas</h1>
      {data.map((item) => (
        <div className="card" key={item.id} id={item.id}>
          <h3>Id: {item.id}</h3>
          <h3>Usuário: {item.nome}</h3>
          <h3>Email: {item.email}</h3>
          <h3>CPF: {item.cpf}</h3>
          <button className="delete-button" onClick={ e =>{axios.delete(`http://127.0.0.1:8000/alunos/${e.target.parentElement.id}/`);renderizar()}}>
            Delete
          </button>
        </div>
      ))}
      <div className="nav-bar">
        <ul>
          <li>
            <a href={`/contacts/1`}>
              <button className="new-user-button">Adicionar</button>
            </a>
          </li>
        </ul>
        <a href={`/contacts/3`}>
          <button className="back-button">Voltar</button>
        </a>
      </div>
    </div>
  );
};
export default Home;

