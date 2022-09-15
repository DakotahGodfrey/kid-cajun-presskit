/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import { RepoCarousel } from "components/";
import { MainWrapper } from "components/Containers";
import Link from "next/link";
import styled from "styled-components";

const Emoji = styled.span.attrs((props) => ({ "aria-hidden": "true" }))`
  margin-right: 0.8rem;
`;
const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>dg_dev | About</title>
        <meta name='description' content='' />
      </Head>
      <MainWrapper>
        <section className='bio'>
          <h1>
            <Emoji>👋</Emoji> Hey There, I'm Dakotah!
          </h1>
          <p></p>
          <p></p>
          <p>
            <Link href={"/contact"}>Contact me.</Link>
          </p>
        </section>
        <section className='reccomends'>
          <h2>Resources For Learners</h2>
          <ul>
            <li>
              <Emoji>🎧</Emoji>
            </li>
          </ul>
        </section>
      </MainWrapper>
    </div>
  );
};

export default About;
