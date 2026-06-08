import React, { useState } from 'react';


function Tarefa({ texto, onRemover }) {
  return (
    <li style={{ margin: '5px 0' }}>
      <span style={{ marginRight: '10px' }}>{texto}</span>
      <button onClick={onRemover}>Remover</button>
    </li>
  );
}


function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa(''); 
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
      <h2>Lista de Tarefas</h2>
      <input 
        type="text" 
        value={novaTarefa} 
        onChange={(e) => setNovaTarefa(e.target.value)} 
        placeholder="Nova tarefa..." 
      />
      <button onClick={adicionarTarefa} style={{ marginLeft: '5px' }}>Adicionar</button>
      
      <ul>
        {tarefas.map((tarefa, index) => (
          <Tarefa 
            key={index} 
            texto={tarefa} 
            onRemover={() => setTarefas(tarefas.filter((_, i) => i !== index))} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;