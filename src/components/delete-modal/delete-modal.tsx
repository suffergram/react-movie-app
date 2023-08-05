import { useContext } from 'react';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
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

  const handleButtonClick = async () => {
    if (movie) {
      await new Promise<void>((resolve) => {
        dispatch(removeMovie(movie.id));
        resolve();
      });
      handleDeleteModalClose();
    }
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
