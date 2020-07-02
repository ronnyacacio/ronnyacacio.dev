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
