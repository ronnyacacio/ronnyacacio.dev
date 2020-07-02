import React from 'react';

import { loadCards } from '../../services/api';
import { Card } from '../../components/';
import activity from '../../assets/activity.svg';
import { Container, Hero, HeroContainer, CardContainer, Cards } from './styles';


const cards = loadCards();

const Home: React.FC = () => {
  return (
    <Container>
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
