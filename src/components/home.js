import React, { useState } from 'react';
import { MdOutlineChevronRight } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import IconWithDiv from './info';


import { Link, Route } from 'react-router-dom';

const Home = () =>{


    const [mostrarBotao, setMostrarBotao] = useState(true);
    const [mostrarDiv, setMostrarDiv] = useState(false); 


    const moverParaEsquerda = () => {
        setMostrarBotao(false); 
        setMostrarDiv(true); 
    };

    return (
        <div className='start'>
        {mostrarBotao && (
        <button 
        onClick={moverParaEsquerda}
        className='buttonstart'>
        <MdOutlineChevronRight size={35}/>
        </button>
        )}
         {mostrarDiv && (
        <div className='view'>
          <info/>
          <div className='logo'></div>
          <div className="openroutes">
          <Link className='link' to="/cadastro" target="" id='cad'>Cadastrar Usuario</Link>
          <Link to="/Login" target="" id='lg'>Já sou usuário</Link>
          </div>
        </div>
      )} 
      <div className='info'>     
      <IconWithDiv/>
      </div>
        <h1 id='title'
         style={{
            transition: 'left 0.5s ease-in-out', 
            position: 'relative',
            left: mostrarDiv ? '-100%' : '0',
            fontSize: '5vw',
          }}         
          >IDISK
          <br/>
          INOVATION
        </h1>
        </div>

    )
}

export default Home; 




