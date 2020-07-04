import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { loadProjects, loadClones } from '../../services/api';
import { Header, Card } from '../../components';
import activity from '../../assets/activity.svg';
import { Hero, HeroContainer, Options, Option, CardGrid } from './styles';

interface ICard {
  title: string;
  description: string;
  image_url: string;
  github_url: string;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [selectedClone, setSelectedClone] = useState(false);

  function toggleSelected() {
    setSelectedClone(prevState => !prevState);
  }

  useEffect(() => {
    if (selectedClone) setCards(loadClones());
    else setCards(loadProjects);
  }, [selectedClone]);

  return (
    <>
      <Header />
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
            <Link to="/about">Saiba mais sobre mim :{')'}</Link>
          </div>
          <img src={activity} alt="portifólio" />
        </HeroContainer>
      </Hero>
      <Options>
        <Option selected={!selectedClone} onClick={selectedClone ? toggleSelected : () => { }}>Projetos</Option>
        <Option selected={selectedClone} onClick={selectedClone ? () => { } : toggleSelected}>Ui Clones</Option>
      </Options>
      <CardGrid>
        {cards.map(card => <Card key={card.title} card={card} />)}
      </CardGrid>
    </>
  );
}

export default Home;
