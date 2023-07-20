import { useContext } from 'react';
import Modal from '../modal/modal';
import Button from '../button/button';
import AppContext from '../app-context/app-context';
import './style.css';

type DeleteModalProps = {
  isModalOpen: boolean;
};

export default function DeleteModal({ isModalOpen }: DeleteModalProps) {
  const { handleDeleteModalClose, movie } = useContext(AppContext);

  const handleButtonClick = () => {
    handleDeleteModalClose();
    fetch(`http://localhost:4000/movies/${movie?.id}`, {
      method: 'DELETE',
    });
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
