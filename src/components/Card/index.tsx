import React from 'react';

import { Container, Image, Content } from './styles';

interface Props {
  card: {
    title: string;
    description: string;
    image_url: string;
    github_url: string;
  }
}

const Card: React.FC<Props> = ({ card }) => {
  function handleToGithub(url: string) {
    window.open(url);
  }

  return (
    <Container onClick={() => handleToGithub(card.github_url)}>
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
  );
}

export default Card;