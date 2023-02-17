import { IWebtoonListUIProps } from "./WebtoonList.types";
import * as S from "./WebtoonList.styles";
import { Row, Col } from "antd";

export default function WebtoonListUI({ webtoonList }: IWebtoonListUIProps): JSX.Element {
  console.log(webtoonList?.[0]._id);
  return (
    <Row>
      {webtoonList?.map((el) => {
        <Col xxl={4} lg={6} md={8} sm={12} xs={12}>
          <S.WebtoonItem key={el._id}>
            webtoonList?.[0]._id
            <div>제목: {el.title}</div>
            <div>플랫폼: {el.service}</div>
          </S.WebtoonItem>
        </Col>;
      })}
    </Row>
  );
}
