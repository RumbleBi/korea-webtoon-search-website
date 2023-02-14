import * as S from "./Loading.styles";

export default function Loading() {
  return (
    <S.Background>
      <S.Spin>
        <div></div>
      </S.Spin>
    </S.Background>
  );
}
