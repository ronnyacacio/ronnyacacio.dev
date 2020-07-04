import styled, { css } from 'styled-components';

interface PropOn {
  on: boolean;
}

export const Container = styled.header`
  background-color: #333;

  @media (max-width: 910px) {
    margin-bottom: -100px;
  }

  img {
    width: 150px;
    margin-left: 20px;
    padding: 15px 0;
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

export const Menu = styled.div<PropOn>`
  @media (max-width: 690px) {
    ${({ on }) =>
      on &&
      css`
        position: absolute;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;

        background-color: #333;

        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 10;

        > nav {
          display: block;

          > ul {
            text-align: center;
            display: block;

            a {
              transition-duration: 0.5s;
              font-size: 3rem;
              line-height: 4rem;
              display: block;
            }
          }
        }
      `}
  }
`;

export const MenuToggle = styled.div<PropOn>`
  @media (max-width: 690px) {
    width: 40px;
    height: 30px;
    margin-right: 20px;

    ${({ on }) =>
      on &&
      css`
        position: absolute;
        right: 18px;
        top: 15px;
      `}
  }
`;

export const One = styled.div<PropOn>`
  @media (max-width: 690px) {
    background-color: #fff;
    height: 5px;
    width: 100%;
    margin: 6px auto;

    transition-duration: 0.5s;

    ${({ on }) =>
      on &&
      css`
        transform: rotate(45deg) translate(7px, 7px);
      `};
  }
`;

export const Two = styled.div<PropOn>`
  @media (max-width: 690px) {
    background-color: #fff;
    height: 5px;
    width: 100%;
    margin: 6px auto;

    transition-duration: 0.5s;

    ${({ on }) =>
      on &&
      css`
        opacity: 0;
      `};
  }
`;

export const Three = styled.div<PropOn>`
  @media (max-width: 690px) {
    background-color: #fff;
    height: 5px;
    width: 100%;
    margin: 6px auto;

    transition-duration: 0.5s;

    ${({ on }) =>
      on &&
      css`
        transform: rotate(-45deg) translate(8px, -9px);
      `}
  }
`;

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

  @media (max-width: 690px) {
    display: none;
  }
`;
