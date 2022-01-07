import React from "react";
import config from "src/config";
import Pagination from "../pagination/Pagination";
import Movie from "./movie/Movie";
import MovieListWrapper from "./MovieListWrapper";

const { imageServiceUrl, mobileImageSizeUrl, desktopImageSizeUrl } = config;

type MovieListProps = {
  movies: any[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const MovieList: React.FC<MovieListProps> = ({
  movies,
  totalPages,
  currentPage,
  onPageChange,
}) => {
  console.log("MOVIE LIST?: ", movies);
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
        <Pagination
          onPageChange={onPageChange}
          total={totalPages}
          current={currentPage}
        ></Pagination>
        <MovieListWrapper>{content}</MovieListWrapper>
        <Pagination
          onPageChange={onPageChange}
          total={totalPages}
          current={currentPage}
        ></Pagination>
      </>
    );
  };

  return renderMovies(
    true,
    movies.map((movie: any) => (
      <Movie
        key={movie.id}
        title={movie.title}
        metainformation={movie.releaseDate}
        posterSrc={getPosterSource(movie.posterPath as string)}
        description={movie.description}
      ></Movie>
    ))
  );
  {
    /* {movies &&
        movies.map((movie: any) => (
          <Movie
            title={movie.title}
            metainformation={movie.releaseDate}
            posterSrc={getPosterSource(movie.posterPath as string)}
            description={movie.description}
          ></Movie>
        ))} */
  }
};

export default MovieList;
