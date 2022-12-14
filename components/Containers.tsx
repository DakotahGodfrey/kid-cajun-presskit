import { getFromTheme } from "@styles/theme";
import styled from "styled-components";

export const MainWrapper = styled.main`
  max-width: 120rem;
  background-color: ${getFromTheme("secondary")};
  margin-inline: auto;
  padding-top: 3rem;
  p {
    margin-top: 1rem;
  }
`;
interface FlexContainer {
  scrollable?: boolean;
}
export const FlexContainer = styled.section<FlexContainer>`
  .row {
    display: flex;
    ${(scrollable) =>
      scrollable &&
      `overflow-x: scroll;
       -webkit-box-pack: justify;
       justify-content: space-between;`}
  }
`;
interface IGridContainerProps {
  columns?: number | string;
  rows?: number;
  gap?: string;
}
export const GridContainer = styled.section<IGridContainerProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns};
  grid-template-rows: ${({ rows }) => (rows ? `repeat(${rows}, 1fr)` : "1fr")};
  padding: 0;
  gap: ${({ gap }) => (gap ? `${gap}` : "1.6rem")};
`;
interface IImageContainerProps {
  mBottom: string;
  pBottom: string;
  height?: string;
  rounded?: boolean;
}
export const ImageContainer = styled.div<IImageContainerProps>`
  position: relative;
  margin-bottom: ${({ mBottom }) => mBottom};
  padding-bottom: ${({ pBottom }) => pBottom};
  height: ${({ height }) => height};
  img {
    ${({ rounded = false }) => rounded && `border-radius: 8px`}
  }
`;
