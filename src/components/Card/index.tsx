import React from 'react';

import { Container, Image, Content } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <Image>
        <img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" alt="Projeto" />
      </Image>

      <Content>
        <p>
          Formulário Animado com JS puro e CSS Animation | Mayk Brito
        </p>
        <div>
          <p>57 Min</p>
        </div>
      </Content>
    </Container>
  );
}

export default Card;