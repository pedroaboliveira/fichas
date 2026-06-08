import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const detalhe = 'Filme: Inception';

    return (
      <div>
        <h1>Lista de Filmes - Props</h1>
        <Detalhe title="Filme" value={detalhe} />
      </div>
    );
  }
}

function Detalhe(props) {
  return <p>{props.value}</p>;
}

export default MovieList;