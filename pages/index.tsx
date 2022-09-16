/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Intro, RepoCarousel, BlogPreviews } from "components/";
import {
  MainWrapper,
  ImageContainer,
  GridContainer,
  FlexContainer,
} from "components/Containers";
import styled from "styled-components";
import { getFromTheme } from "@styles/theme";
import { BsSpotify } from "react-icons/bs";
import useViewport from "hooks/useViewport";
import mq from "@styles/breakpoints";

const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  iframe {
    overflow: hidden;
    border: 0;
    align-self: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

interface IBandMemberProps {
  name: string;
  bio: string;
  imagePath: string;
}
const BandContainer = styled.div`
  background-color: ${getFromTheme("BG")};
  padding: 2rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-rows: min-content 35rem 1fr;
  height: 100%;
  border-radius: 15px;
  span {
    font-size: ${getFromTheme("headingLG")};
  }
  p {
    min-height: 100%;
    background-color: ${getFromTheme("secondary")};
    padding: 0.5rem;
    margin-top: 0;
  }
`;
const BandMember: React.FC<IBandMemberProps> = ({ name, bio, imagePath }) => {
  return (
    <BandContainer>
      <h3
        style={{
          fontFamily: `"Rye", "Nunito Sans", sans`,
          fontWeight: "900",
          fontSize: "3.2rem",
        }}
      >
        {name}
      </h3>
      <div className='card card-gallery'>
        <ImageContainer pBottom='none' mBottom='none'>
          <Image
            src={`/images/${imagePath}.jpg`}
            alt=''
            layout='fill'
            objectFit='cover'
            objectPosition='center top'
            quality={75}
          />
        </ImageContainer>
      </div>
      <p className=''>{bio}</p>
    </BandContainer>
  );
};
export const IntroWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem 3rem;
  h1 {
    border-bottom: 2px solid ${getFromTheme("accent")};
  }
`;
export const BannerWrapper = styled.div`
  text-align: center;
  padding: 1.6rem;
  background-color: ${getFromTheme("BG")};
`;
const Home: NextPage = () => {
  const width = useViewport();
  const isMobile = width <= mq.xs;
  const isTablet = width <= mq.sm;

  const greeting = "Kid Cajun Releases Fascintainment";
  return (
    <div>
      <Head>
        <title>dg_dev</title>
        <meta name='description' content='' />
      </Head>
      <MainWrapper>
        <section className={`${isMobile ? "rmPadding" : ""}`}>
          <GridContainer id='intro' columns={isTablet ? 1 : 2}>
            <IntroWrapper>
              <Intro heading={greeting} />
              <blockquote>
                Ron Sellwood is leader of Toronto’s Kid Cajun, a “no boundaries”
                group that plays the music it loves, whether up-tempo
                toe-tappers, ballads, or rollicking mid-tempo crowd pleasers.
              </blockquote>
            </IntroWrapper>
            <div className='card card-gallery'>
              <ImageContainer
                pBottom='none'
                height='40rem'
                mBottom='none'
                rounded
              >
                <Image
                  src={`/images/${"album-cover-b"}.jpg`}
                  alt=''
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center center'
                  quality={75}
                />
              </ImageContainer>
            </div>
          </GridContainer>
          <section className='bio'>
            <p>
              Original tunes have always been a part of the band’s repertoire
              and with their most recent release – Fascintainment - the thirteen
              songs included here are all Sellwood compositions. The opening
              cut, ‘Beauty Was Everywhere’ is a love song dedicated to the
              people, and especially the children, of Ukraine. “I was inspired
              to write the tune after the brutal Russian invasion,” says
              Sellwood. “I felt I needed to say something. And this song is the
              result of that need.” Sellwood has been an active player on the
              Toronto music scene for many a year. He’s an accomplished keyboard
              player, as well as singer and songwriter, and it’s with
              ‘Fascintainment’ he hopes to make a bigger mark, not only for his
              song writing skills but in expanding the band’s audience as well.
              The adventure begins.
            </p>
            <p style={{ marginBottom: "2.4rem" }}>
              For Ron Sellwood, leader of Toronto’s Kid Cajun, the last few
              years have not been easy ones. The plucky Sellwood fought cancer
              long and hard, and eventually emerged on top. Now in perfect
              health, he was given as opportunity to step back and take a hard
              look at the wider world. notice the wider world. First came the
              ravages of COVID (from which he luckily escaped) then the tragedy
              of Ukraine. The heartfelt new single, Beauty Was Everywhere,
              written by Sellwood and performed by Kid Cajun, documents the once
              pleasant life enjoyed by the people of Ukraine, now interrupted by
              a hideous war. “Its a love song dedicated to the people and
              especially the children of Ukraine” says Ron. Are the horrors of
              war interrupting a wonderful life, analogous to the horrors of
              cancer? Perhaps so. In any case, one cannot help but be moved by
              the love, hope and sincerity in this powerful new song.
            </p>
            {/* <h3>Tracklist</h3>
              <ul className='tracklist'>
                <li>1. Beauty Was Everywhere</li>
                <li>2. Fascintainment</li>
                <li>3. Not Quite Ready To Move On Yet</li>
                <li>4. Jake and Me and the Other Three</li>
                <li>5. Turn That Circle Upside Down</li>
                <li>6. All Hail the Hammer and the Nail</li>
                <li>7. Do It the Way Your Mother Told You</li>
                <li>8. Handle With Care</li>
                <li>9. Worn Out Stairs</li>
                <li>10. Faceplant</li>
                <li>11. Monster Mask</li>
                <li>12. Swing Renaldo</li>
                <li>13. Boardwalk to the Stars</li>
              </ul> */}
            <h2>Beauty Was Everywhere</h2>
            <IframeWrapper>
              <iframe
                src='https://www.youtube.com/embed/YK13ODLIOYM'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                referrerPolicy={"strict-origin"}
                loading='lazy'
              ></iframe>
            </IframeWrapper>
          </section>
          <section className='music' style={{ width: "100%" }}>
            <h2 style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <BsSpotify style={{ marginRight: "1.6rem", color: "#1DB954" }} />
              Listen now on Spotify
            </h2>

            <iframe
              style={{ borderRadius: "12px" }}
              src='https://open.spotify.com/embed/artist/4qEw5OVpqnrrih9WZtUdwg?utm_source=generator&theme=0'
              width='100%'
              height='380'
              frameBorder='0'
              allowFullScreen
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'
              sandbox='allow-scripts allow-same-origin'
            ></iframe>
          </section>
          <section>
            {" "}
            <GridContainer
              columns={isTablet ? 1 : 2}
              className='band'
              style={{ alignItems: "start" }}
            >
              <h2
                style={{
                  gridColumn: `${!isTablet ? "1 /span 2" : ""}`,
                  margin: "2.4rem 0",
                }}
              >
                {" "}
                Kid Cajun is...
              </h2>
              <BandMember
                name='Ron Sellwood'
                imagePath='band-02'
                bio='Accordian, piano, vocals. Veteran of
            the Toronto music scene, writer of many excellent songs in the Kid
            Cajun repertoire, Fascintainment is the first Kid Cajun release
            featuring all original Sellwood songs.'
              />
              <BandMember
                name='Alice Sellwood'
                imagePath='band-01'
                bio='Drums, vocals, Ron’s daughter, Alice.
            As well as being an excellent, well rounded musician, Alice is a
            prominent figure in Toronto’s concert scene. She’s currently
            involved in helping manage the city’s famed Koerner Hall..'
              />
              <BandMember
                name='Teddy Hawkins'
                imagePath='band-05'
                bio='Washboard, drums, vocals, Bon Vivant
            and man about town. Teddy plays with many local artists including Danny
            Marks, Lily Frost, Thelonious Hank and The Hulagoons. One very solid
            addition to the Kid Cajun Band.'
              />
              <BandMember
                name='Paul Stansfield'
                imagePath='paul-01'
                bio='After touring Canada for many years
            on the “showband“ circuit, Paul retired from the music industry to
            work in finance. He now finds himself back on stage playing British
            style Rock & Roll with local band The Four Heads as well as
            bringing his solid backing rhythms to Kid Cajun.'
              />
              <BandMember
                name='Rachel Melas'
                imagePath='band-18'
                bio='Upright bass. A well known figure on
            Toronto’s Queen W. Club scene, Rachel lends her sense of fun and
            virtuoso playing to such acts as Swamperella, Courage of Lassie,
            Club Django, as well as the klezmer sounds of The Gypsy Jive Band
            and The Horables'
              />
              <BandMember
                imagePath='shelley-01'
                name='Shelley Coopersmith'
                bio='Toronto based side person, in Kid Cajun Shelley plays
            violin, mandolin and adds her own distinctive backing vocal sounds.
            She’s toured extensively and has performed and recorded with
            numerous artists including Sylvia Tyson, Ron Hynes, Eddie Schwartz,
            Gwen Swick, and Joanne Mackell. Well known for her quick ear and
            ability to fit in flawlessly in any musical situation, she’s also
            adept at entertaining commuters in the subway!'
              />
            </GridContainer>
          </section>
        </section>
      </MainWrapper>
    </div>
  );
};
export default Home;
