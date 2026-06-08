import React from 'react';
import Mensagem from './Components/Mensagem';
import AlterarTexto from './Components/AlterarTexto';
import Contador from './Components/Contador';
import Form from './Components/Form';
import ListaTarefas from './Components/ListaTarefas';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Resolução da Ficha Prática Nº 6</h1>
      
      {/* Exercício 2 */}
      <Mensagem nome="Carlos" />
      <Mensagem nome="Maria" />
      
      {/* Exercício 3 */}
      <AlterarTexto />
      
      {/* Exercício 4 */}
      <Contador />
      
      {/* Exercício 5 */}
      <Form />
      
      {/* Exercício 6 */}
      <ListaTarefas />
    </div>
  );
}

export default App;