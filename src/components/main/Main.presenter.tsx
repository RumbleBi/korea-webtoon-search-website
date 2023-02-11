import { getWebtoons } from "@/api/getWebtoon";
import { Col, Row } from "antd";
import * as S from "./Main.styles";

export default function MainPresenter() {
  getWebtoons();
  return (
    <S.Background>
      <S.BackgroundImg>
        <Row>
          <S.Title>한국 웹툰 정보 사이트</S.Title>
          <Col xxl={4} lg={6} md={8} sm={12} xs={12}>
            <S.WebtoonListWrapper>
              <div>사이트</div>
              <ul>
                <li>월</li>
                <li>화</li>
                <li>수</li>
                <li>목</li>
                <li>금</li>
                <li>토</li>
                <li>일</li>
              </ul>
            </S.WebtoonListWrapper>
          </Col>
        </Row>
      </S.BackgroundImg>
    </S.Background>
  );
}
