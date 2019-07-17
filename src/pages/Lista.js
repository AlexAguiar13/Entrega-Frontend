import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

import { MdAssignment } from 'react-icons/md';
import { TiLocationOutline } from "react-icons/ti";

import './Lista.css';

class Lista extends Component {
   state = {
      lista: []
   };

   async componentDidMount() {
      const response = await api.get('cadastro');

      this.setState({ lista: response.data })
   }

   render() {
      return (
         <div id="lista-container">
            { this.state.lista.map(post => (
               <ul key={post._id}>
                  <li>
                     <MdAssignment size={24} color="#00000" />
                     <span>Nome:</span>
                     <strong>{post.nome}</strong>                     
                     <span>Data:</span>
                     <strong>{post.data}</strong>                     
                     <span><>Ponto de Partida:</></span>
                     <strong>{post.pontoP}</strong>                     
                     <span>Ponto de Destino:</span>
                     <strong>{post.pontoD}</strong>   
                     <Link to="/google">
                        <button>
                           <TiLocationOutline size={24} color="#ff0000" />
                        </button>
                     </Link>
                  </li>
               </ul>
            )) }            
         </div>
      );
   }
}

export default Lista;