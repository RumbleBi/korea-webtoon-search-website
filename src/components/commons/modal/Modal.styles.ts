import styled from "styled-components";

export const Wrapper = styled.div`
  @keyframes viewModal {
    0% {
      display: none;
    }
    50% {
      display: inherit;
    }
    100% {
      display: none;
    }
  }
  width: 30%;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 20px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(0%, -50%);
  animation: viewModal 1s linear;
`;
