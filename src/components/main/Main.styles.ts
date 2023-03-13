import { breakPoints } from "@/styles/media";
import styled from "styled-components";
export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
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
  margin-top: 1rem;
  text-align: center;
  background-color: var(--background-main);
  @media ${breakPoints.mobile} {
    padding: 1rem;
    border-radius: 2rem;
    font-size: var(--font-size-sm);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;
export const WebtoonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${breakPoints.mobile} {
    padding: 1rem;
  }
`;
export const WebtoonUpdateBox = styled.div`
  @media ${breakPoints.mobile} {
    div {
      float: left;
      margin: 0.25rem 0.25rem;
      padding: 0.625rem;
      border-radius: 2rem;
      background-color: var(--background-main);
    }
  }
`;
export const WebtoonPlatformBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  div {
    padding: 0.625rem;
    border-radius: 2rem;
  }
  #platform {
    background-color: var(--background-main);
  }
  div:not(#platform) {
    cursor: pointer;
    background-color: var(--background-click);
  }
  @media ${breakPoints.mobile} {
    margin-top: 1rem;
  }
`;
export const WebtoonDaysBox = styled.div`
  ul {
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
    li {
      background-color: var(--background-click);
      border-radius: 2rem;
    }
  }
  @media ${breakPoints.mobile} {
    margin-top: 1rem;
    ul {
      li {
        padding: 0.125rem;
      }
    }
  }
`;
