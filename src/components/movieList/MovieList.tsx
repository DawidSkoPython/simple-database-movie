import React from "react";
import config from "src/config";
import Movie from "./movie/Movie";
import MovieListWrapper from "./MovieListWrapper";

const { imageServiceUrl, mobileImageSizeUrl, desktopImageSizeUrl } = config;

type MovieListProps = {
  movies: any[];
};

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  console.log('LOADED movies: ', movies)
  
  const getPosterSource = (posterPath: string) => {
    const isMobile = window.innerWidth <= 768;
    if (posterPath) {
      return `${imageServiceUrl}/${desktopImageSizeUrl}${posterPath}`;
    }
    return null;
  };

  const renderMovies = (center: boolean, content: any) => {
    return (
      <>
        <MovieListWrapper>{content}</MovieListWrapper>
      </>
    );
  };

  return <>{movies && movies.map((movie: any) => 
  <Movie posterSrc={getPosterSource(movie.posterPath as string)}>
  </Movie>)}</>;
};

export default MovieList;
