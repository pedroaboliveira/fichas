import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const AppFooter = () => {
  return (
    // Rodapé com cor de fundo: #1b1c1d
    <footer style={{ backgroundColor: '#1b1c1d', color: 'white', padding: '30px 0', marginTop: 'auto' }}>
      <Container>
        <Row>
          <Col md="4">
            <h5>Sobre a App</h5>
            <p>Projeto desenvolvido no âmbito da disciplina de Programação III.</p>
          </Col>
          <Col md="4">
            <h5>Navegação</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
              <li>Contacte-nos</li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Redes Sociais</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AppFooter;