import { MovieCard } from "./MovieCard";

import '../styles/content.scss';

export function Content() {
  // Complete aqui
  const selectedGenre = "genre";
  const movies = [];

  return(
    <div className="container">
  <header>
    <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {movies.length > 0 && movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>
  )
}