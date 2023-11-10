import React, { useState } from 'react';
import Cadastro from './cadastro.js'; // Importe o componente de cadastro

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [showCadastro, setShowCadastro] = useState(false); // Adicione um estado para controlar a exibição do formulário de cadastro

  const usuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Usuario:', usuario);
    console.log('Senha:', password);
  };

  const toggleCadastro = () => {
    setShowCadastro(!showCadastro); // Alternar entre exibir e ocultar o formulário de cadastro
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Usuário:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={usuarioChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChange}
            required
          />
        </div>

        <button type="submit">Entrar</button>

        {/* Adicione um link ou botão para alternar para o formulário de cadastro */}
        <p>
          Ainda não tem uma conta?{' '}
          <button type="button" onClick={toggleCadastro}>
            Cadastre-se
          </button>
        </p>
      </form>

      {/* Exiba o formulário de cadastro se o estado showCadastro for true */}
      {showCadastro && <Cadastro />}
    </div>
  );
};

export default Login;
