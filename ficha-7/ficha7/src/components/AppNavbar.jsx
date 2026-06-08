import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    // Menu com cor de fundo: #1b1c1d
    <Navbar style={{ backgroundColor: '#1b1c1d' }} dark expand="md">
      <NavbarBrand tag={Link} to="/">Aplicação TMDB</NavbarBrand>
      <Nav className="me-auto" navbar>
        {/* 'Inicio' - invoca a rota principal da página */}
        <NavItem>
          <NavLink tag={Link} to="/">Inicio</NavLink>
        </NavItem>
        {/* 'Lista de filmes (tabela)' - invoca a rota '/filmes-table' */}
        <NavItem>
          <NavLink tag={Link} to="/filmes-table">Lista de filmes (tabela)</NavLink>
        </NavItem>
        {/* 'Lista de filmes (card)' - invoca a rota '/filmes-card' */}
        <NavItem>
          <NavLink tag={Link} to="/filmes-card">Lista de filmes (card)</NavLink>
        </NavItem>
        {/* 'Contactos' - invoca a rota '/contacts' */}
        <NavItem>
          <NavLink tag={Link} to="/contacts">Contactos</NavLink>
        </NavItem>
        {/* 'Log in' - invoca a rota '/login' */}
        <NavItem>
          <NavLink tag={Link} to="/login">Log in</NavLink>
        </NavItem>
        {/* 'Sign Up' - invoca a rota '/signup' */}
        <NavItem>
          <NavLink tag={Link} to="/signup">Sign Up</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;