import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const BackgroundImg = styled.div`
  @keyframes moveRight {
    0% {
      background-position: 0 center;
    }
    100% {
      background-position: -2250px center;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url("/images/background.webp") 0 center / 2250px repeat;
  animation: moveRight 30s linear 0s infinite normal none;
`;
export const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
`;
export const WebtoonListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
