import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

const Cadastro = () => {
    const [usuario, setUsuario] = useState("");

    
    return (
        <div className='cad'>
            <h3>Criar Usuário</h3>
            <form className='viewcadastro' >
                <div className='createusuario'>
                <label id='usuario' htmlFor="usuario">Usuário:</label>
                <input
                type="usuario"
                id="usuario"
                required
                />
            </div>
            <div>
                <div className='rgsenha'>
                <label htmlFor="password">Senha:</label>
                <input
                type="password"
                id="password"
                required
                />
                </div>
                <div className='checkpsw'>
                <label id='checkpsw' htmlFor="checkpsw">Confirmação de <br/> senha: </label>
                <input
                type="password"
                id="checkpsw"
                required
                />
                </div>
            </div>
            <button id="create"type="submit">
            <span>CADASTRAR</span>
            </button>
            <Link id='rdclg'to="/login" target="">Já sou usuário</Link>

            </form>
        </div>        
    );
}

export default Cadastro;