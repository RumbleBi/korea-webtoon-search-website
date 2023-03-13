import { IWebtoonListUIProps } from "./WebtoonList.types";
import * as S from "./WebtoonList.styles";
import Image from "next/image";
import Link from "next/link";
import { ConfigProvider, Row, Col, Grid, Tag } from "antd";

const { useBreakpoint } = Grid;

export default function WebtoonListUI({ webtoonList }: IWebtoonListUIProps): JSX.Element {
  const screens = useBreakpoint();

  console.log(screens.xs);
  console.log(screens.lg);

  return (
    <ConfigProvider
      theme={{
        token: {
          screenXSMax: 480,
          screenSMMin: 481,
          screenSM: 481,
          screenSMMax: 481,
          screenMDMin: 481,
          screenMD: 481,
          screenMDMax: 481,
          screenLGMin: 481,
          screenLGMax: 1023,
          screenXLMin: 1024,
        },
      }}
    >
      <Row>
        {webtoonList?.map((el, index) => (
          <Col xl={4} lg={8} xs={12} key={index}>
            <S.WebtoonItem key={el._id}>
              <a href={el.url} target='_blank' rel='noreferrer'>
                <div>{el.title}</div>
                <div>{el.service}</div>
                <div>{el.updateDays}</div>
                {el.additional?.adult && (
                  <Image
                    src='/images/adult.png'
                    alt='19'
                    width={20}
                    height={20}
                    unoptimized={true}
                  />
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
    </ConfigProvider>
  );
}
