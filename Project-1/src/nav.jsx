import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(128, 128, 128, 0.368);
  position: relative;
  z-index: 10;
`;

const Logo = styled.img`
  width: 150px;
`;

const MenuIcon = styled.i`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 703px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  justify-content:center;
  align-items:center;

  @media (max-width: 703px) {
    flex-direction: column;
    position: absolute;
    top: 9vh;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    z-index: 1;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.3s ease;
    /* transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-20px)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    box-shadow: ${({ isOpen }) => (isOpen ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')}; */
    display:${({ isOpen }) => (isOpen ? 'none' : 'flex')}
  }
`;

const MenuItem = styled.li`
  a {
    text-decoration: none;
    color: rgb(88, 87, 87);
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: black;
      text-decoration: underline;
      text-underline-offset: 0.5rem;
      text-decoration-color: red;
    }
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background: rgb(255, 0, 0);
  color: white;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgb(200, 0, 0);
  }

  @media (max-width: 703px) {
    width: 100%;
  }
`;

const nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo src="/images/arblogo.png" alt="Logo" />
      <MenuIcon className="fa-solid fa-bars" onClick={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen}>
        <MenuItem>
          <a href="#home">Home</a>
        </MenuItem>
        <MenuItem>
          <a href="#services">Services</a>
        </MenuItem>
        <MenuItem>
          <a href="#about">About</a>
        </MenuItem>
        <MenuItem>
          <a href="#contact">Contact</a>
        </MenuItem>
        <LoginButton>Login</LoginButton>
      </Menu>
    </Nav>
  );
};

export default nav;
