import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import NameForm from './test'; // Use o caminho correto para o arquivo
const Cadastro = () => {
    const [usuario, setUsuario] = useState("");

    
    return (
        <div className='cad'>
            <h3>Criar Usuário</h3>
            <div className='viewcadastro' >
            <NameForm/>
            </div>
        </div>        
    );
}

export default Cadastro;