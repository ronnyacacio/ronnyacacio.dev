import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: scroll;
  max-height: 100vh;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #222;
  }

  @media (max-width: 690px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default Wrapper;