import React, { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';
const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState(0);

  async function addUser() {
    const response = await axios.post('http://127.0.0.1:8000/alunos/', {
      nome: nome,
      email: email,
      cpf: cpf,
    });
    console.log(response.data);
  }
  return (
    <div className="container">
      <h1>Cadastro</h1>
      <input
        className="input"
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <p></p>
      <input
        className="input"
        type="text"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p></p>
      <input
        className="input"
        type="number"
        maxLength="11"
        placeholder="CPF"
        onChange={(e) => setCpf(e.target.value)}
      />
      <p></p>
      <nav>
        <ul>
          <li>
            <a href={`/contacts/2`}>
              <button className="button" onClick={addUser}>
                Cadastrar
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a href={`/contacts/2`}>
              <button className="button back-button">Voltar</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Cadastro;
