import React, { Component } from 'react';
import api from '../services/api';

import './Cadastro.css';

class Cadastro extends Component {
   state = {
      nome: '',
      data: '',
      pontoP: '',
      pontoD: '',
   };

   handleSubmit = async e  => {
      e.preventDefault();

      const response = await api.post('cadastro', {
         nome: this.state.nome,
         data: this.state.data,
         pontoP: this.state.pontoP,
         pontoD: this.state.pontoD
      });

      this.props.history.push(`/lista/${response}`);
   }

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   }

   render() {
      return (
         <div id="main-container">
            <form onSubmit={this.handleSubmit}>
               <h1>ENTREGA</h1>
               <input
                  name="nome"
                  placeholder="Nome Completo"
                  value={this.state.nome}
                  onChange={this.handleChange}
               />
               <input
                  name="data"
                  placeholder="Data de entrega"
                  value={this.state.data}
                  onChange={this.handleChange}
               />
               <input
                  name="pontoP"
                  placeholder="Ponto de partida (ponto ou endereço)"
                  value={this.state.pontoP}
                  onChange={this.handleChange}
               />
               <input
                  name="pontoD"
                  placeholder="Ponto de destino (ponto ou endereço)"
                  value={this.state.pontoD}
                  onChange={this.handleChange}
               />
               <button type="submit">Cadastrar</button>
            </form>
         </div>
      );
   }
}

export default Cadastro;