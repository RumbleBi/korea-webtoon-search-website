import styled from "styled-components";

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
  width: 100vw;
  height: 100vh;
  background: url("/images/background.webp") 0 center / 2250px repeat;
  animation: moveRight 30s linear 0s infinite normal none;
`;
