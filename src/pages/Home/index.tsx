import React from 'react';

import logo from '../../assets/logo.svg';
import { Container, HeaderContainer, Menu, Nav } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <header>
        <HeaderContainer>
          <img src={logo} alt="ronnyacacio.dev" />

          <Menu>
            <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>

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
            </div>
          </Menu>

        </HeaderContainer>
      </header>
    </Container>
  );
}

export default Home;
