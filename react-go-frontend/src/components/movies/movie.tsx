import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../interface/movies/movies-interface";

const MovieComponent: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  let { id } = useParams();
  console.log("getting the id", id);

  useEffect(() => {
    let dummyData: Movie = {
      id: 1,
      title: "God of War",
      release_date: "2001-04-05",
      runtime: 120,
      mpaa_rating: "PG-13",
      description: "this is always long",
    };
    setMovie(dummyData);
  }, [id]);
  console.log("getting the movie: ", movie);
  return (
    <>
      <h2>movie: {movie?.title}</h2>
      <hr />
    </>
  );
};

export default MovieComponent;
