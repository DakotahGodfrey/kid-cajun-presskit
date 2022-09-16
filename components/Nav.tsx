import { defaultTheme, darkTheme, getFromTheme } from "@styles/theme";
import Link from "next/link";
import { BannerWrapper } from "pages";
import React from "react";
import styled from "styled-components";
import { BsLightbulbFill, BsMoonStarsFill } from "react-icons/bs";

const NavWrapper = styled.header`
  max-width: 120rem;
  margin-inline: auto;
  background-color: ${getFromTheme("secondary")};
  padding: 2.2rem 1.2rem 1.2rem;
  > div {
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    padding: 1.6rem;
    border-radius: 0.5rem;
    font-weight: 700;
  }
  ul {
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
  }
  li.logo-nav {
    margin-right: 0.8rem;
  }

  li {
    &:last-child {
      margin-left: 0.8rem;
    }
  }
  a,
  button {
    padding: 1rem 0.4rem;
    color: ${getFromTheme("primary")};
    border-radius: 0.5rem;
    font-size: 2.8rem;
    &:hover {
      background-color: ${getFromTheme("secondary")};
      color: ${getFromTheme("accent")};
    }
  }
`;

interface INavbarProps {
  currentTheme: typeof defaultTheme | typeof darkTheme;
  handleThemeSwitch: (theme: typeof defaultTheme | typeof darkTheme) => void;
}
export const Navbar: React.FC<INavbarProps> = ({
  currentTheme,
  handleThemeSwitch,
}) => {
  return (
    <>
      <NavWrapper>
        <div>
          <nav>
            <ul>
              <li className='logo-nav'>
                <Link href='/'>Kid Cajun</Link>
              </li>
              <li className='border'>|</li>
              <li>
                <Link href={"/gallery"}>Gallery</Link>
              </li>
            </ul>
          </nav>
          <div className='menu'>
            <button onClick={() => handleThemeSwitch(currentTheme)}>
              {currentTheme === defaultTheme ? (
                <BsMoonStarsFill />
              ) : (
                <BsLightbulbFill />
              )}
            </button>
          </div>
        </div>
      </NavWrapper>
      <BannerWrapper>
        <p>
          Catch Ron live @{" "}
          <a href='https://goo.gl/maps/otU32Q6HM8eXG7VN6'>
            The Dominion Tavern, 500 Queen St. E.
          </a>{" "}
        </p>
        <i>Thursday, Sept 22, 7 until 9 pm</i>
      </BannerWrapper>
    </>
  );
};
