import styled from "styled-components";

export const Background = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spin = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
  div {
    @keyframes infiniteRotate {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
    position: absolute;
    width: 120px;
    height: 120px;
    border: 20px solid #ffd400;
    border-top-color: transparent;
    border-radius: 50%;
    animation: infiniteRotate 1s linear infinite;
    top: 100px;
    left: 100px;
    box-sizing: content-box;
  }
`;
