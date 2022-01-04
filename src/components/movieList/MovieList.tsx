import React from "react";
import MovieListWrapper from "./MovieListWrapper";

type MovieListProps = {
  movies: any[];
};

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  console.log('LOADED movies: ', movies)
  
  const renderMovies = (center: boolean, content: any) => {
    return (
      <>
        <MovieListWrapper>{content}</MovieListWrapper>
      </>
    );
  };

  return <MovieListWrapper>It's a movie list</MovieListWrapper>;
};

export default MovieList;
