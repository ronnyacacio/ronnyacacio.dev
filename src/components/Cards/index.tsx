import React, { useState, useEffect } from 'react';

import { loadProjects, loadClones } from '../../services/api';
import { Container, Image, Content } from './styles';

interface ICard {
  title: string;
  description: string;
  image_url: string;
  github_url: string;
}

const Cards: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    setCards(loadProjects());
  }, []);

  function handleNavigateToGithub(card: ICard) {
    if (card.title === 'Ui Clones') {
      setCards(loadClones());
      window.scroll(0, 500);
      return;
    }

    if (card.title === 'Projetos') {
      setCards(loadProjects());
      window.scroll(0, 500);
      return;
    }
    window.open(card.github_url);
  }

  return (
    <>
      {cards.map(card => (
        <Container key={card.title} onClick={() => handleNavigateToGithub(card)}>
          <Image>
            <img src={card.image_url} alt={card.title} />
          </Image>

          <Content>
            <h3>{card.title}</h3>
            <p>
              {card.description}
            </p>
          </Content>
        </Container>
      ))}
    </>
  );
}

export default Cards;