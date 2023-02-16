import { useWebtoonInfo } from "@/hooks/useWebtoonInfo";
import { useWebtoonList } from "@/hooks/useWebtoonList";
import { getDate } from "@/libraries/utils";
import { Col, Row } from "antd";
import Loading from "../commons/loading/Loading";
import * as S from "./Main.styles";

// interface IData {
//   totalWebtoonCount: number;
//   naverWebtoonCount: number;
//   kakaoPageWebtoonCount: number;
//   kakaoWebtoonCount: number;
//   lastUpdate: string;
//   createdWebtoonCount: number;
//   updatedWebtoonCount: number;
// }

export default function MainPresenter(): JSX.Element {
  const webtoonInfo = useWebtoonInfo();
  const webtoonList = useWebtoonList();

  return (
    <S.Background>
      <Loading />
      <S.BackgroundImg>
        <Row>
          <S.Title>한국 웹툰 정보 사이트</S.Title>
          <Col xxl={4} lg={6} md={8} sm={12} xs={12}>
            <S.Wrapper>
              <S.WebtoonInfoWrapper>
                <S.WebtoonUpdateBox>
                  <div>웹툰 정보 업데이트 시간: {getDate(webtoonInfo?.lastUpdate)}</div>
                  <div>신작웹툰 : 0</div>
                </S.WebtoonUpdateBox>
                <div>
                  <div>총 웹툰 수 : 0</div>
                  <span>네이버 웹툰 작품 수 : 0 </span>
                  <span>다음 웹툰 작품 수 : 0 </span>
                  <span>카카오 웹툰 작품 수 : 0 </span>
                </div>
                <S.WebtoonPlatformBox>
                  <span>플랫폼</span>
                  <span>네이버</span>
                  <span>다음</span>
                  <span>카카오</span>
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
                  </ul>
                </S.WebtoonDaysBox>
              </S.WebtoonInfoWrapper>
              <S.WebtoonList></S.WebtoonList>
            </S.Wrapper>
          </Col>
        </Row>
      </S.BackgroundImg>
    </S.Background>
  );
}
