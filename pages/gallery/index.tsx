/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import { Intro } from "components/";
import { GridContainer, MainWrapper } from "components/Containers";
import styled from "styled-components";
import { getFromTheme } from "@styles/theme";
import Image from "next/image";
import { IntroWrapper } from "pages";
import useViewport from "hooks/useViewport";
import mq from "@styles/breakpoints";

export const GalleryCardContainer = styled.div`
  background-color: ${getFromTheme("BG")};
  display: grid;
  grid-template-rows: 40rem;
  height: 100%;
  position: relative;
  img {
    border: 0.3rem ${getFromTheme("accent")} solid;
  }
`;

interface IGalleryCardProps {
  imagePath: string;
}
const GalleryCard: React.FC<IGalleryCardProps> = ({ imagePath }) => {
  return (
    <GalleryCardContainer>
      <Image
        src={`/images/${imagePath}.jpg`}
        alt=''
        layout='fill'
        objectFit='cover'
        objectPosition='top center'
        quality={75}
        loading='lazy'
      />
    </GalleryCardContainer>
  );
};

const Gallery: NextPage = () => {
  const featuredImages = [
    "band-02",
    "band-01",
    "band-03",
    "band-04",
    "band-05",
    "band-06",
    "band-006",
    "band-07",
    "band-08",
    "band-09",
    "band-10",
    "paul-01",
    "shelley-01",
    "band-12",
    "band-13",
    "band-14",
    "band-15",
    "band-17",
    "band-18",
    "band-19",
    "ted-drum-02",
  ];
  const width = useViewport();
  const isMobile = width <= mq.xs;
  const isTablet = width <= mq.sm;
  return (
    <div>
      <Head>
        <title>dg_dev | Gallery</title>
        <meta name='description' content='' />
      </Head>
      <MainWrapper>
        <IntroWrapper>
          <Intro heading='Gallery' />
          <p>Enjoy these shots of the band live and in action...</p>
        </IntroWrapper>
        <section className={`${isMobile ? "rmPadding" : ""}`}>
          <GridContainer
            columns={`${
              isMobile
                ? "repeat(1, 1fr)"
                : isTablet
                ? "repeat(1, 1fr 2fr)"
                : "repeat(1, 1fr 2fr 1fr)}"
            }`}
            gap={"1rem"}
          >
            {featuredImages.map((image) => {
              return <GalleryCard key={image} imagePath={image} />;
            })}
          </GridContainer>
        </section>
      </MainWrapper>
    </div>
  );
};

export default Gallery;
