import React from 'react';

import { Wrapper, Header } from '../../components';
import profile from '../../assets/images/profile.jpeg';
import skills from '../../assets/skills.svg';
import { Profile, ProfileContainer, Title, Skills } from './styles';

const About: React.FC = () => {
  return (
    <Wrapper>
      <Header />

      <Profile>
        <ProfileContainer>
          <div>
            <h2>Luiz Ronny Acácio</h2>
            <Title>Resumo</Title>
            <p>
              Atualmente imerso no ecossistema javascript / typescript, focado tanto no backend,
              frontend, mobile cross-platform e UI/UX design pois a minha cultura e o que gosto
              de fazer é resolver problemas. Sou muito responsável, muito fácil de trabalhar em
              grupo e por conta disso utilizo bastante de tecnologias ágeis. Meu objetivo é participar de projetos que facilitem a vida das pessoas, aplicando tecnologias
              modernas e que resolvam problemas eficientemente.
            </p>
          </div>
          <img src={profile} alt="Ronny Acácio" />
        </ProfileContainer>
      </Profile>

      <Skills>
        <img src={skills} alt="Competências" />
        <div>
          <Title>Competências</Title>
          <p><b>Forte: </b>ReactJS, React Native, Node.js, Redux, Express, Styled Components, ES6,
            JSON, CSS, Git, Sequelize ORM, Postgres, mongoDB, Docker, Autenticação JWT,
            REST APIs, Design System (Bootstrap), Responsividade
          </p>
          <p>
            <b>Conhecedor:</b> TypeScript, TypeORM, Prisma, AdonisJS, GraphQL, Flutter, Dart,
            Java, PHP, MySQL, C, C++
          </p>
        </div>
      </Skills>
    </Wrapper>
  );
}

export default About;