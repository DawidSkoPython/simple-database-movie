import React from "react";
import LoadableImage from "src/common/loadableImage/LoadableImage";
import ContentWrapper from "./ContenWrapper";
import Description from "./Description";
import GetMoreInformation from "./GetMoreInformation";
// import ContentWrapper from './ContenWrapper'
import ImageWrapper from "./ImageWrapper";
import MetaInformation from "./MetaInformation";
import MoviesWrapper from "./MoviesWrapper";
import Title from "./Title";

export type MovieProps = {
  posterSrc: string | null;
  title: string;
  metainformation: string;
  description: string;
};

export const Movie: React.FC<MovieProps> = ({
  posterSrc,
  title,
  metainformation,
  description,
}) => {
  return (
    <MoviesWrapper>
      <ImageWrapper>
        <LoadableImage src={posterSrc ?? ""}></LoadableImage>
      </ImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <MetaInformation>{metainformation}</MetaInformation>
        <Description>{description}</Description>
        <GetMoreInformation>Get more information</GetMoreInformation>
      </ContentWrapper>
    </MoviesWrapper>
  );
};

export default Movie;
