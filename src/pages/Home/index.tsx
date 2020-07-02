import React, { useState, useEffect } from 'react';

import Card from '../../components/Card';
import logo from '../../assets/logo.svg';
import activity from '../../assets/activity.svg';
import { Container, HeaderContainer, Menu, MenuToggle, One, Two, Three, Nav, Hero, HeroContainer, CardContainer, Cards } from './styles';

import { loadCards } from '../../services/api';

const cards = loadCards();

const Home: React.FC = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = visibleMenu ? 'hidden' : 'initial';
  }, [visibleMenu]);

  function handleToggleMenu() {
    setVisibleMenu(prevState => !prevState);
  }

  return (
    <Container>
      <header>
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
      <CardContainer>
        <Cards>
          {cards.map(card => <Card card={card} />)}
        </Cards>
      </CardContainer>
    </Container>
  );
}

export default Home;
