import React, { useState } from 'react';

function AlterarTexto() {
  const textoOriginal = "Clique no botão para alterar a mensagem";
  const [mensagem, setMensagem] = useState(textoOriginal);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
      <p>{mensagem}</p>
      <button onClick={() => setMensagem("Obrigado por clicares!")}>
        Alterar Mensagem
      </button>
      <button onClick={() => setMensagem(textoOriginal)} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default AlterarTexto;