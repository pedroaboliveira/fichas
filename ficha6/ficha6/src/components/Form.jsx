import React, { useState } from 'react';

function Form() {
  const estadoInicial = {
    primeiroNome: '',
    ultimoNome: '',
    idade: '',
    email: '',
    tipo: 'informação',
    termos: false
  };

  const [formData, setFormData] = useState(estadoInicial);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!formData.primeiroNome || !formData.ultimoNome || !formData.idade || !formData.email) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    if (!formData.termos) {
      alert("Tem de aceitar os termos de uso.");
      return;
    }

    alert("Formulário submetido com sucesso");
  };

  const handleLimpar = () => {
    setFormData(estadoInicial);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', margin: '10px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2>Formulário de Contacto</h2>
      
      <input type="text" name="primeiroNome" placeholder="Primeiro Nome" value={formData.primeiroNome} onChange={handleChange} />
      <input type="text" name="ultimoNome" placeholder="Último Nome" value={formData.ultimoNome} onChange={handleChange} />
      <input type="number" name="idade" placeholder="Idade" value={formData.idade} onChange={handleChange} />
      <input type="email" name="email" placeholder="Endereço de Email" value={formData.email} onChange={handleChange} />
      
      <select name="tipo" value={formData.tipo} onChange={handleChange}>
        <option value="informação">Informação</option>
        <option value="reclamação">Reclamação</option>
        <option value="recomendação">Recomendação</option>
      </select>

      <label>
        <input type="checkbox" name="termos" checked={formData.termos} onChange={handleChange} />
        Li e concordo com os termos de uso e política de privacidade.
      </label>

      <div>
        <button type="submit">Submeter</button>
        <button type="button" onClick={handleLimpar} style={{ marginLeft: '10px' }}>Limpar</button>
      </div>
    </form>
  );
}

export default Form;