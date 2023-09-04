import { useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { Popover } from '../popover/popover';
import { ModalContext } from '../../context/modal-context';
import { Movie } from '../../types/movie';
import { ModalState } from '../../types/modal-state';
import { Button } from '../button/button';
import './style.css';

type CardProps = {
  movie: Movie;
};

export const Card = memo(({ movie }: CardProps) => {
  const { handleModalOpen } = useContext(ModalContext);

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
      <Link to={`movies/${movie.id}`}>
        <div className="card-image-container">
          <img
            className="card-image"
            src={movie.poster_path}
            alt={movie.title}
          />
        </div>
        <div className="description">
          <div className="year">{movie.release_date.slice(0, 4)}</div>
          <p className="title">{movie.title}</p>
          <p className="genre">{movie.genres.join(', ')}</p>
        </div>
      </Link>
      <Popover>
        <Button className="edit" onClick={handleEditModalOpen}>
          edit
        </Button>
        <Button className="delete" onClick={handleDeleteModalOpen}>
          delete
        </Button>
      </Popover>
    </div>
  );
});
