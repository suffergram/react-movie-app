import Modal from '../Modal/Modal';
import Button from '../Button/Button';

import './style.css';

type DeleteModalProps = {
  onModalClose: () => void,
  isModalOpen: boolean,
};

export default function DeleteModal(
  { onModalClose, isModalOpen }: DeleteModalProps,
) {
  return (
    <Modal isModalOpen={isModalOpen} onModalClose={onModalClose} title="delete movie">
      <p>Are you sure you want to delete this movie?</p>
      <Button className="confirm delete-modal">confirm</Button>
    </Modal>
  );
}
