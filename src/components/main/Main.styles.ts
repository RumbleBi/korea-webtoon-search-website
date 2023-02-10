import styled from "styled-components";

export const Background = styled.div`
  @keyframes moveRight {
    from {
      margin-left: 0px;
    }
    to {
      margin-left: 100px;
    }
  }
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-size: auto 100%;
  background-image: url("https://web-prod.laftel.net/3.2.34/assets/img-landing-background.36bcefc5.webp");
  background-repeat: repeat-x;
  animation: moveRight 10s linear 0s infinite normal none;
  animation-play-state: running;
`;
