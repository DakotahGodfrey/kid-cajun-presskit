import React from "react";

interface IIntroProps {
  heading: string;
}

export const Intro: React.FC<IIntroProps> = ({ heading }) => {
  return <h1>{heading}</h1>;
};
