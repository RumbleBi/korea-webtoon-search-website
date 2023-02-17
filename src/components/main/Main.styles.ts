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
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  background-color: red;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
export const WebtoonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 5% 10px 5%;
`;
export const WebtoonUpdateBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const WebtoonCountBox = styled.div``;
export const WebtoonPlatformBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const WebtoonDaysBox = styled.div`
  ul {
    display: flex;
    justify-content: space-evenly;
  }
`;
// export const WebtoonListWrapper = styled.div`
//   background-color: blue;
//   width: 100%;
//   height: 100vh;
// `;
