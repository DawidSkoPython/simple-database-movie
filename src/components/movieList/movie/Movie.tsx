import React from "react";
import LoadableImage from "src/common/loadableImage/LoadableImage";
import ContentWrapper from "./ContenWrapper";
// import ContentWrapper from './ContenWrapper'
import ImageWrapper from "./ImageWrapper";
import MoviesWrapper from "./MoviesWrapper";

export type MovieProps = {
  posterSrc: string | null;
};

export const Movie: React.FC<MovieProps> = ({ posterSrc }) => {
  return (
    <MoviesWrapper>
      <ImageWrapper>
        <LoadableImage src={posterSrc ?? ""}></LoadableImage>
      </ImageWrapper>
      <ContentWrapper></ContentWrapper>
    </MoviesWrapper>
  );
};

export default Movie;
