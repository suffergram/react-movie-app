import { useContext } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import AppContext from '../AppContext/AppContext';
import './style.css';

type DeleteModalProps = {
  isModalOpen: boolean;
};

export default function DeleteModal({ isModalOpen }: DeleteModalProps) {
  const { handleDeleteModalClose } = useContext(AppContext);

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalClose={handleDeleteModalClose}
      title="delete movie"
    >
      <p>Are you sure you want to delete this movie?</p>
      <Button className="confirm delete-modal">confirm</Button>
    </Modal>
  );
}
