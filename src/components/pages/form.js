import React, { useState } from 'react';
import axios from 'axios';

function NameForm() {
  const [formData, setFormData] = useState({
    username: '',
    user: '',
    senha: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users', formData);
      console.log('Usuário criado:', response.data);
      
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      
    }
  };

  return (
    <div>
      <form id="cadastro" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br/>
        <label>
          User:
          <input
            type="text"
            name="user"
            value={formData.user}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <input type="submit" id="enviar" value="Enviar" />
      </form>
    </div>
  );
}

export default NameForm;
