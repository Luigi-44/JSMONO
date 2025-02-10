import "./Programs.css";
import { useLoaderData } from "react-router-dom";

type Film = {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  country: string;
  year: number;
};

function Programs() {
  const films = useLoaderData() as Film[];

  return (
    <>
      <div className="Card">
        {films.map((film) => (
          <div key={film.id} className="CardFilm">
            <h2 key={film.id}>{film.title}</h2>
            <img src={film.poster} alt={film.title} />
            <p>Synopsis :{film.synopsis}</p>
            <span>Pays :{film.country}</span>
            <span>Année :{film.year}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Programs;
