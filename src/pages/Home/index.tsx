import React from 'react';

import { Cards } from '../../components';
import activity from '../../assets/activity.svg';
import { Hero, HeroContainer, CardGrid } from './styles';

const Home: React.FC = () => {
  return (
    <>
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
            da Computação na Universidade Federal do Ceará - UFC.
            </p>
            <a href="https://www.linkedin.com/in/ronnyacacio/">Fale comigo no linkedin :{')'}</a>
          </div>
          <img src={activity} alt="" />
        </HeroContainer>
      </Hero>
      <CardGrid>
        <Cards />
      </CardGrid>
    </>
  );
}

export default Home;
