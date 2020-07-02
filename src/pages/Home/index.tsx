import React from 'react';

import logo from '../../assets/logo.svg';
import activity from '../../assets/activity.svg';
import { Container, HeaderContainer, Menu, Nav, Hero, HeroContainer } from './styles';

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
      <Hero>
        <HeroContainer>
          <div>
            <h2>
              Bem vindo! Esse site mostra um pequeno resumo sobre mim e meus
              projetos!
            </h2>
            <p>
              Me chamo <b>Ronny Acácio</b> e sou um apaixonado por resolver
            problemas com tecnologias, tenho 20 anos, sou graduando em Ciências
            da Computação na Universidade Federal do Ceará - UFC e atualmente
            estudo a stack Node.js, ReactJS e React Native.
            </p>
            <a href="https://www.linkedin.com/in/ronnyacacio/">Fale comigo no linkedin :{')'}</a>
          </div>
          <img src={activity} alt="" />
        </HeroContainer>
      </Hero>
    </Container>
  );
}

export default Home;
