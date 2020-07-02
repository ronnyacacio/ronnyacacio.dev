import React, { Dispatch, SetStateAction } from 'react';

import { loadCards, loadClones } from '../../services/api';
import { Container, Image, Content } from './styles';

interface Card {
  title: string;
  description: string;
  image_name: string;
  github_url: string;
}

interface Props {
  card: Card;
  setCards: Dispatch<SetStateAction<Card[]>>
}

const Card: React.FC<Props> = ({ card, setCards }) => {
  function handleNavigateToGithub(card: Card) {
    if (card.title === 'Ui Clones') {
      setCards(loadClones());
      return;
    }

    if (card.title === 'Projetos') {
      setCards(loadCards());
      return;
    }
    window.open(card.github_url);
  }

  return (
    <Container onClick={() => handleNavigateToGithub(card)}>
      <Image>
        <img src={require(`../../assets/${card.image_name}`)} alt={card.title} />
      </Image>

      <Content>
        <h3>{card.title}</h3>
        <p>
          {card.description}
        </p>
      </Content>
    </Container>
  );
}

export default Card;