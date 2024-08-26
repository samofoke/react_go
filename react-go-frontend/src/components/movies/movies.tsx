import React, { useState, useEffect } from "react";
import { Movie } from "../../interface/movies/movies-interface";

const MoviesSection: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const movieList: Movie[] = [
    {
      id: 1,
      title: "God of War",
      release_date: "2001-04-05",
      runtime: 120,
      mpaa_rating: "PG-13",
      description: "this is always long",
    },
    {
      id: 2,
      title: "Sword Art Online",
      release_date: "2015-04-05",
      runtime: 120,
      mpaa_rating: "PG-13",
      description: "don't worry too much",
    },
  ];

  console.log("learning types: ", movieList);

  useEffect(() => {
    setMovies(movieList);
  }, []);

  return (
    <>
      <div>
        <h2>Movies</h2>
        <hr />
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Release Date</th>
              <th>Rating</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default MoviesSection;
