import styled from 'styled-components';

export const Profile = styled.section`
  margin: 40px 0;
`;

export const ProfileContainer = styled.div`
  width: 90%;
  max-width: 980px;

  margin: auto;

  display: flex;

  > div {
    color: #f0f0f0;
    margin-right: 100px;

    h2 {
      font-size: 3.6rem;
      line-height: 4.6rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.8rem;
      line-height: 3.2rem;
      margin: 10px 0px 0px;
    }
  }
  > img {
    width: auto;
    height: 300px;
    border-radius: 50%;

    @media (max-width: 910px) {
      order: -1;
      margin-bottom: 4rem;
      height: 200px;
    }
  }

  @media (max-width: 910px) {
    margin-top: 120px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    > div {
      margin-right: 0;
    }
  }
`;

export const Title = styled.h3`
  font-size: 2.6rem;
  line-height: 3.6rem;
`;

export const Skills = styled.section`
  width: 90%;
  max-width: 980px;

  margin: 40px auto 80px;

  display: flex;

  > div {
    margin-left: 80px;
    color: #f0f0f0;

    p {
      font-size: 1.8rem;
      line-height: 3.2rem;
      margin: 10px 0px 0px;
    }

    @media (max-width: 910px) {
      margin: 40px 0 0 0;
    }
  }

  > img {
    width: auto;
    height: 250px;

    @media (max-width: 910px) {
      order: -1;
      height: 200px;
      margin-right: 0;
    }
  }

  @media (max-width: 910px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const SkillsGrid = styled.div`
  width: 90%;
  max-width: 980px;

  margin: auto auto 80px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;
