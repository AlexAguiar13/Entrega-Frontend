import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/logo.JPG';
import lista from '../assets/lista.PNG';
import cadastro from '../assets/cadastro.png';


export default function Header() {
   return (
      <header id="main-header">
         <div>
            <img src={logo} alt="Unicad" />
         </div>
         <div className="header-content">
            <Link to="/" className="h1">
               <h1>Cadastro
                  <img src={cadastro} align="center" alt="Cadastro" />
               </h1>
            </Link>
            <Link to="/lista" className="h1">
               <h1>Lista
                  <img src={lista} align="center" alt="ListarCadastro" />
               </h1>
            </Link>
         </div>
      </header>
   );
}
