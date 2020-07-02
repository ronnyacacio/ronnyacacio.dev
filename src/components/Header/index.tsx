import React, { useState, useEffect } from 'react';

import logo from '../../assets/logo.svg';
import { Container, HeaderContainer, Menu, MenuToggle, One, Two, Three, Nav } from './styles';

export default function Header() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = visibleMenu ? 'hidden' : 'initial';
  }, [visibleMenu]);

  function handleToggleMenu() {
    setVisibleMenu(prevState => !prevState);
  }

  return (
    <Container>
      <HeaderContainer>
        <img src={logo} alt="ronnyacacio.dev" />

        <Menu on={visibleMenu}>
          <MenuToggle onClick={handleToggleMenu} on={visibleMenu}>
            <One on={visibleMenu} />
            <Two on={visibleMenu} />
            <Three on={visibleMenu} />
          </MenuToggle>
          <Nav>
            <ul>
              <li>
                <a href="https://github.com/ronnyacacio">Home</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ronnyacacio/">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/ronnyacacio">GitHub</a>
              </li>
              <li>
                <a href="https://github.com/ronnyacacio">Currículo</a>
              </li>
            </ul>
          </Nav>
        </Menu>

      </HeaderContainer>
    </Container>
  );
}