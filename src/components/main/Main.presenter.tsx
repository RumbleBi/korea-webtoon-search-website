import { useWebtoonInfo } from "@/hooks/useWebtoonInfo";
import { getDate } from "@/libraries/utils";
import { Col, Row } from "antd";
import Loading from "../commons/loading/Loading";
import WebtoonList from "../webtoonList/WebtoonList.container";
import * as S from "./Main.styles";

export default function MainUI(): JSX.Element {
  const webtoonInfo = useWebtoonInfo();

  return (
    <S.Background>
      <Loading />
      <S.BackgroundImg>
        <S.Title>한국 웹툰 정보 사이트</S.Title>
        <S.Wrapper>
          <S.WebtoonInfoWrapper>
            <S.WebtoonUpdateBox>
              <div>갱신일 : {getDate(webtoonInfo?.lastUpdate)}</div>
              <div>총 웹툰 수 : {webtoonInfo?.totalWebtoonCount}</div>
              <div>신작웹툰 : {webtoonInfo?.createdWebtoonCount}</div>
              <div>업데이트된 웹툰 수 : {webtoonInfo?.updatedWebtoonCount}</div>
              <div>네이버 작품 수 : {webtoonInfo?.naverWebtoonCount} </div>
              <div>카카오페이지 작품 수 : {webtoonInfo?.kakaoPageWebtoonCount} </div>
              <div>카카오 작품 수 : {webtoonInfo?.kakaoWebtoonCount} </div>
            </S.WebtoonUpdateBox>
            <S.WebtoonPlatformBox>
              <div>플랫폼</div>
              <div>네이버</div>
              <div>카카오페이지</div>
              <div>카카오</div>
            </S.WebtoonPlatformBox>
            <S.WebtoonDaysBox>
              <ul>
                <li>월</li>
                <li>화</li>
                <li>수</li>
                <li>목</li>
                <li>금</li>
                <li>토</li>
                <li>일</li>
                <li>완결</li>
                <li>네이버 Daily+</li>
              </ul>
            </S.WebtoonDaysBox>
          </S.WebtoonInfoWrapper>
        </S.Wrapper>
        <WebtoonList />
      </S.BackgroundImg>
    </S.Background>
  );
}
