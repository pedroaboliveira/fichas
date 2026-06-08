import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incContador = () => setContador(contador + 1);
  const decContador = () => setContador(contador - 1);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', textAlign: 'center' }}>
      <h1>Contador</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <button onClick={decContador} style={{ fontSize: '20px', padding: '5px 15px' }}>-</button>
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{contador}</span>
        <button onClick={incContador} style={{ fontSize: '20px', padding: '5px 15px' }}>+</button>
      </div>
    </div>
  );
}

export default Contador;