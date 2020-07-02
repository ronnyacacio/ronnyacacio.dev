import styled from 'styled-components';

export const Container = styled.div`
  header {
    background-color: #536dfe;

    img {
      width: 150px;
      margin-left: 20px;
      padding: 15px 0;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 980px;

  margin: auto;
`;

export const Menu = styled.div``;

export const Nav = styled.nav`
  ul {
    display: flex;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        font-size: 1.4rem;
        padding: 24px;
        transition: all 250ms linear 0s;

        &:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }
  }
`;

export const Hero = styled.section`
  margin: 80px 0;
`;

export const HeroContainer = styled.div`
  width: 90%;
  max-width: 980px;

  margin: auto;

  display: flex;

  > div {
    h2 {
      color: rgb(75, 75, 75);
      font-size: 3.6rem;
      line-height: 4.6rem;
    }

    p {
      color: rgb(154, 142, 191);
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
    background-color: #536dfe;

    &:hover {
      opacity: 0.9;
    }
  }

  img {
    width: auto;
    height: 300px;
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
