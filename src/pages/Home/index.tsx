import React, { useState, useEffect } from 'react';

import { loadCards } from '../../services/api';
import { Card } from '../../components';
import activity from '../../assets/activity.svg';
import { Hero, HeroContainer, CardContainer, Cards } from './styles';

interface ICard {
  title: string;
  description: string;
  image_name: string;
  github_url: string;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    setCards(loadCards());
  }, []);

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
      <CardContainer>
        <Cards>
          {cards.map(card => <Card key={card.title} card={card} setCards={setCards} />)}
        </Cards>
      </CardContainer>
    </>
  );
}

export default Home;
