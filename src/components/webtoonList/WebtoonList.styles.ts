import { breakPoints } from "@/styles/media";
import styled from "styled-components";

export const WebtoonItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid var(--background-click);
  justify-content: center;
  border-radius: 2rem;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  @media ${breakPoints.mobile} {
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      margin: 0.625rem;
    }
  }
`;
export const WebtoonThumbnail = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
