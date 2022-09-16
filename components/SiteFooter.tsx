import { getFromTheme } from "@styles/theme";
import { socialLinks } from "@utils/data";
import { FaFacebookSquare, FaSpotify, FaYoutubeSquare } from "react-icons/fa";
import styled from "styled-components";
import { GridContainer } from "./Containers";

const FooterWrapper = styled.footer`
  max-width: 120rem;
  margin-inline: auto;
  background-color: ${getFromTheme("secondary")};
  padding: 2.2rem 1.2rem 1.2rem;
  > section {
    background-color: ${getFromTheme("BG")};
    margin-inline: auto;
    font-size: 1.8rem;
    padding: 1.6rem;
    border-radius: 0.5rem;
    font-weight: 700;
  }

  small {
    font-size: 1rem;
    padding: 0 1.2rem;
  }

  .social {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      a {
        display: flex;
        align-items: center;
        font-size: 2.2rem;
        padding: 1.2rem;
      }
    }
  }
`;

export const SiteFooter: React.FC = () => {
  return (
    <FooterWrapper>
      <GridContainer columns={1}>
        {/* Quick Contact */}
        <div></div>
        {/* Socials */}
        <div className='social'>
          <div>
            <p> Find Us On Social Media</p>
            <ul>
              {socialLinks.map(({ display, url, color }) => (
                <li key={display}>
                  <a
                    href={url}
                    style={{ color: `${color}`, fontSize: "2.4rem" }}
                  >
                    {display === "spotify" ? (
                      <FaSpotify />
                    ) : display === "youtube" ? (
                      <FaYoutubeSquare />
                    ) : (
                      <FaFacebookSquare />
                    )}{" "}
                    <span className='sr-only'>{display}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <small>&copy; {new Date().getFullYear()} dakotah_godfrey_dev</small>
          </div>
        </div>
      </GridContainer>
    </FooterWrapper>
  );
};
