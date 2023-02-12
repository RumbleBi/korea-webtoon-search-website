import { getWebtoons } from "@/api/getWebtoon";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import * as S from "./Main.styles";

interface IData {
  totalWebtoonCount: number;
  naverWebtoonCount: number;
  kakaoPageWebtoonCount: number;
  kakaoWebtoonCount: number;
  lastUpdate: string;
  createdWebtoonCount: number;
  updatedWebtoonCount: number;
}

export default function MainPresenter() {
  const [data, setData] = useState<Object>({});
  useEffect(() => {
    getWebtoons().then((el: any) => setData(el));
  }, []);

  console.log(data);
  return (
    <S.Background>
      <S.BackgroundImg>
        <Row>
          <S.Title>한국 웹툰 정보 사이트</S.Title>
          <Col xxl={4} lg={6} md={8} sm={12} xs={12}>
            <S.WebtoonListWrapper>
              <div>
                <span>웹툰 정보 업데이트 시간: {data.lastUpdate}</span>
                <span>신작웹툰 : 0</span>
                <span>총 웹툰 수 : 0</span>
              </div>
              <div>
                <span>네이버 웹툰 작품 수 : 0 </span>
                <span>다음 웹툰 작품 수 : 0 </span>
                <span>카카오 웹툰 작품 수 : 0 </span>
              </div>
              <div>
                <span>네이버</span>
                <span>다음</span>
                <span>카카오</span>
              </div>
              <div>
                <ul>
                  <li>월</li>
                  <li>화</li>
                  <li>수</li>
                  <li>목</li>
                  <li>금</li>
                  <li>토</li>
                  <li>일</li>
                </ul>
              </div>
            </S.WebtoonListWrapper>
          </Col>
        </Row>
      </S.BackgroundImg>
    </S.Background>
  );
}
