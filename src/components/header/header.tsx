import { useContext } from 'react';
import Button from '../button/button';
import MovieInfo from '../movie-info/movie-info';
import ModalTitles from '../../types/modal-title';
import AppContext from '../app-context/app-context';
import './style.css';

export default function Header() {
  const { handleMovieModalOpen, isMovieInfoOpen, handleMovieInfoClose, movie } =
    useContext(AppContext);

  const handleClick = () => {
    handleMovieModalOpen(ModalTitles.Add);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <p className="logo logo-pos">
          <strong>netflix</strong>
          roulette
        </p>

        <Button className="add" onClick={handleClick}>
          + add movie
        </Button>

        <div>
          <h1>FIND YOUR MOVIE</h1>

          <div className="search-line">
            <input placeholder="What do you want to watch?" />

            <Button className="confirm">search</Button>
          </div>
        </div>
      </div>

      {isMovieInfoOpen ? (
        <MovieInfo movie={movie} onMovieInfoClose={handleMovieInfoClose} />
      ) : null}
    </header>
  );
}
