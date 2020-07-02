import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #536dfe;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    transform: translateY(-7px);
  }
`;

export const Image = styled.div`
  width: 100%;
  padding-top: 56.25%; /* 16:9 */

  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Content = styled.div`
  margin: 20px;

  > p {
    margin-bottom: 20px;
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: #ecf0f1;
  }

  > div {
    display: flex;
    align-self: end;
    align-items: center;

    p {
      font-size: 1.6rem;
      line-height: 2.6rem;
      font-weight: 400;
      color: #ecf0f1;
    }
  }
`;
