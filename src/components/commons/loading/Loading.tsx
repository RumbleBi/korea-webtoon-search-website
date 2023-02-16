import * as S from "./Loading.styles";
import { useIsFetching } from "react-query";
export default function Loading(): JSX.Element {
  const isFetching = useIsFetching();
  const display = isFetching ? "inherit" : "none";

  return (
    <S.Background display={display}>
      <S.Spin>
        <div></div>
      </S.Spin>
    </S.Background>
  );
}
