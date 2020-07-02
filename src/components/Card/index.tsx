import React from 'react';

import { Container, Image, Content } from './styles';

interface Props {
  card: {
    title: string;
    description: string;
    clone: boolean;
    image_name: string;
    github_url: string;
  }
}

const Card: React.FC<Props> = ({ card }) => {
  function handleNavigateToGithub(url: string) {
    window.open(url);
  }

  return (
    <Container onClick={() => handleNavigateToGithub(card.github_url)}>
      <Image>
        <img src={require(`../../assets/${card.image_name}`)} alt={card.title} />
      </Image>

      <Content>
        <h3>{card.title}</h3>
        <p>
          {card.description}
        </p>
        <div>
          {card.clone && <p>clone</p>}
        </div>
      </Content>
    </Container>
  );
}

export default Card;