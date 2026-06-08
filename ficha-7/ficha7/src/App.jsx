import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

// Importação dos Componentes
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import TableView from './components/TableView';
import CardView from './components/CardView';

function App() {
  // Dados fictícios para testar a Tabela e os Cards antes de ligares a API TMDB
  const dadosExemplo = [
    { id: 1, titulo: 'O Padrinho', ano: '1972' },
    { id: 2, titulo: 'O Cavaleiro das Trevas', ano: '2008' },
    { id: 3, titulo: 'A Lista de Schindler', ano: '1993' }
  ];

  const colunasTabela = [
    { label: '# ID', chave: 'id' },
    { label: 'Título do Filme', chave: 'titulo' },
    { label: 'Ano de Lançamento', chave: 'ano' }
  ];

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Área fixa da página com o menu de navegação */}
        <AppNavbar />

        {/* Área dinâmica da página que mostra o conteúdo consoante a rota */}
        <div style={{ flex: 1, padding: '20px 0' }}>
          <Container>
            <Routes>
              {/* Uma rota principal (root) que invoca a raiz do servidor */}
              <Route path="/" element={<h2>Página de Início</h2>} />
              
              {/* Uma rota 'filmes-table' que mostra os filmes em formato tabela */}
              <Route path="/filmes-table" element={
                <div>
                  <h2>Tabela de Filmes</h2>
                  <TableView dados={dadosExemplo} colunas={colunasTabela} />
                </div>
              } />
              
              {/* Uma rota 'filmes-card' que mostra os filmes em formato "cartão" */}
              <Route path="/filmes-card" element={
                <div>
                  <h2>Cards de Filmes</h2>
                  <CardView dados={dadosExemplo} campoTitulo="titulo" campoTexto="ano" />
                </div>
              } />
              
              {/* Uma rota 'contacts' que mostra contactos (fictícios) */}
              <Route path="/contacts" element={<h2>Os Nossos Contactos (Fictícios)</h2>} />
              
              {/* Uma rota 'login' que mostra o formulário de autenticação */}
              <Route path="/login" element={<h2>Página de Login</h2>} />
              
              {/* Uma rota 'signup' que mostra o formulário de registo de nova conta */}
              <Route path="/signup" element={<h2>Registar Nova Conta</h2>} />
            </Routes>
          </Container>
        </div>

        {/* Área fixa da página que mostra o rodapé */}
        <AppFooter />

      </div>
    </BrowserRouter>
  );
}

export default App;
