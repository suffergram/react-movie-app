import { useContext } from 'react';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Modal from '../modal/modal';
import Button from '../button/button';
import AppContext from '../app-context/app-context';
import removeMovie from '../../state/remove-movie';
import RootState from '../../types/root-state';
import './style.css';

type DeleteModalProps = {
  isModalOpen: boolean;
};

export default function DeleteModal({ isModalOpen }: DeleteModalProps) {
  const { handleDeleteModalClose, movie } = useContext(AppContext);

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const { sort, filter, offset } = useSelector(
    (state: RootState) => state.movieState
  );

  const handleButtonClick = () => {
    if (movie)
      dispatch(
        removeMovie(movie.id, handleDeleteModalClose, filter, sort, offset)
      );
  };

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalClose={handleDeleteModalClose}
      title="delete movie"
    >
      <p>Are you sure you want to delete this movie?</p>
      <Button className="confirm delete-modal" onClick={handleButtonClick}>
        confirm
      </Button>
    </Modal>
  );
}
