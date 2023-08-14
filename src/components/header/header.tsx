import { useContext } from 'react';
import Button from '../button/button';
import MovieInfo from '../movie-info/movie-info';
import ModalContext from '../../context/modal-context';
import InfoContext from '../../context/info-context';
import { ModalState } from '../../types/modal-state';
import './style.css';

export default function Header() {
  const { handleModalOpen } = useContext(ModalContext);
  const { handleInfoClose, info } = useContext(InfoContext);

  const handleClick = () => {
    handleModalOpen({
      name: ModalState.Add,
    });
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

      {info?.name === ModalState.Info ? (
        <MovieInfo movie={info.data} onMovieInfoClose={handleInfoClose} />
      ) : null}
    </header>
  );
}
