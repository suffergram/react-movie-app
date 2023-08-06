import { useContext, memo } from 'react';
import Popover from '../popover/popover';
import ModalContext from '../../context/modal-context';
import { Movie } from '../../types/movie';
import './style.css';
import { ModalState } from '../../types/modal-state';
import Button from '../button/button';
import InfoContext from '../../context/info-context';

type CardProps = {
  movie: Movie;
};

const Card = memo(({ movie }: CardProps) => {
  const { handleModalOpen } = useContext(ModalContext);
  const { handleInfoOpen } = useContext(InfoContext);

  const handleCardClick = () => {
    handleInfoOpen({
      name: ModalState.Info,
      data: movie,
    });
  };

  const handleDeleteModalOpen = () => {
    handleModalOpen({
      name: ModalState.Delete,
      data: movie,
    });
  };

  const handleEditModalOpen = () => {
    handleModalOpen({
      name: ModalState.Edit,
      data: movie,
    });
  };

  return (
    <div className="card">
      <button
        id={movie.id.toString()}
        onClick={handleCardClick}
        onKeyDown={handleCardClick}
        className="card-image-container"
        type="button"
      >
        <img src={movie.poster_path} alt={movie.title} />
      </button>

      <Popover>
        <Button className="edit" onClick={handleEditModalOpen}>
          edit
        </Button>
        <Button className="delete" onClick={handleDeleteModalOpen}>
          delete
        </Button>
      </Popover>

      <div className="description">
        <div className="year">{movie.release_date.slice(0, 4)}</div>
        <p className="title">{movie.title}</p>
        <p className="genre">{movie.genres.join(', ')}</p>
      </div>
    </div>
  );
});

export default Card;
