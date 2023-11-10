import React, { useState, useEffect  } from 'react';
import axios from 'axios';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    senha: '',
  });

  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/cadastro', formData);

      if (response.status === 201) {
        console.log('Cadastro realizado com sucesso!');
        setCadastroSucesso(true); // Definir o estado como verdadeiro em caso de sucesso
      } else {
        console.error('Erro ao cadastrar cliente');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      console.error('Detalhes do erro Axios:', error.response);
    }; 
  };
  useEffect(() => {
    if (cadastroSucesso) {
      window.location.reload();
    }
  }, [cadastroSucesso]);

  return (
    <div>
      <form id="cadastro" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
        </label>
        <br/>
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
        {cadastroSucesso && (
        <span id='cadastrowin'>Cadastro realizado com sucesso!</span>
      )}
      </form>
    </div>
  );
};

export default Cadastro;
