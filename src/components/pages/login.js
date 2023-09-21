import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [usuario, setUsuario] = useState(''); // Estado para o campo de e-mail
    const [password, setPassword] = useState(''); // Estado para o campo de senha

    const usuarioChange = (event) => {
        setUsuario(event.target.value); // Atualiza o estado do e-mail com o valor do campo
    };

    const passwordChange = (event) => {
        setPassword(event.target.value); // Atualiza o estado da senha com o valor do campo
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação, por exemplo, enviando os dados para um servidor
        // e verificando se as credenciais são válidas.
        // Por enquanto, apenas exibiremos os valores no console.
        console.log('Usuario:', usuario);
        console.log('Senha:', password);
    };

    return (
        <div>
      <h2>Login</h2>

      <form className='viewlogin' onSubmit={handleSubmit}>
        <div className='viewcontainer'>
          <div className='usuario'>
          <label id='usuario' htmlFor="usuario">Usuário:</label>
          <input
            type="usuario"
            id="usuario"
            value={usuario}
            onChange={usuarioChange}
            required
          />
        </div>
        </div>
        <div>
          <div className='senha'>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChange}
            required
          />
        </div>
        </div>
        <button id="submit" type="submit">Entrar</button>

      </form>
    </div>
    );
}

export default Login;