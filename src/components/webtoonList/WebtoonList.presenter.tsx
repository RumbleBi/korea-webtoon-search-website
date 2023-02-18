import { IWebtoonListUIProps } from "./WebtoonList.types";
import * as S from "./WebtoonList.styles";
import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function WebtoonListUI({ webtoonList }: IWebtoonListUIProps): JSX.Element {
  return (
    <Row>
      {webtoonList?.map((el, index) => (
        <Col xxl={4} lg={6} md={8} sm={12} xs={12} key={index}>
          <S.WebtoonItem key={el._id}>
            <a href={el.url} target='_blank' rel='noreferrer'>
              <div>{el.title}</div>
              <div>{el.service}</div>
              <div>{el.updateDays}</div>
              {el.additional?.adult && (
                <Image src='/images/adult.png' alt='19' width={20} height={20} unoptimized={true} />
              )}
              <div>좋아요: {el.fanCount}만</div>
              <S.WebtoonThumbnail>
                {el.url.includes("pstatic") ? (
                  <Image src={el.img} alt='img' width={150} height={200} />
                ) : (
                  <img src={el.img} alt='img' width={150} height={200} />
                )}
              </S.WebtoonThumbnail>
            </a>
          </S.WebtoonItem>
        </Col>
      ))}
    </Row>
  );
}
