import React from 'react';

const Cadastro = () => {
    return (
        <div className='cad'>
            <h3>Cadastro</h3>
            <form className='viewcadastro' >
                <div className='usuario'>
                <label id='usuario' htmlFor="usuario">Usuário:</label>
                <input
                type="usuario"
                id="usuario"
           
                required
                />
            </div>
            <div>
                <div className='senha'>
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
            </form>
        </div>        
    );
}

export default Cadastro;