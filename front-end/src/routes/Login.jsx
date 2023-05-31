import React, { useState } from 'react';
import "./Login.css"
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setLoginSuccess(true);
      setError('');
    } else {
      setError('Dados inválidos');
      setLoginSuccess(false);
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username" className="label">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Senha:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
            />
            <button type="button" onClick={toggleShowPassword} className="toggle-password">
              {showPassword ? 'Esconder' : 'Mostrar'}
            </button>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Logar</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <a href={`/contacts/2`}>{loginSuccess && <p className="success-message">Login bem-sucedido! Clique Aqui</p>}</a>
      </form>
    </div>
  );
};
export default Login;
