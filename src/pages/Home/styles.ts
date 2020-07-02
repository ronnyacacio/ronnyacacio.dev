import styled from 'styled-components';

export const Hero = styled.section`
  margin: 80px 0;
`;

export const HeroContainer = styled.div`
  width: 90%;
  max-width: 980px;

  margin: auto;

  display: flex;

  > div {
    color: #f0f0f0;
    h2 {
      font-size: 3.6rem;
      line-height: 4.6rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 3.2rem;
      margin: 10px 0px 0px;
    }
  }

  a {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
    margin: 15px 0px 0px;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 5px;
    transition: all 150ms linear 0s;
    background-color: #fff;
    color: #222;

    &:hover {
      opacity: 0.9;
    }
  }

  img {
    width: auto;
    height: 300px;

    @media (max-width: 910px) {
      order: -1;
    }
  }

  @media (max-width: 910px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CardContainer = styled.main`
  margin-bottom: 80px;
`;

export const Cards = styled.section`
  width: 90%;
  max-width: 980px;

  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;
