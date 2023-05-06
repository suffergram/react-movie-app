import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import './style.css';

export default function DeleteModal({ isOpen, onClose }) {
  const modalType = 'delete';

  return (
    <Modal isOpen={isOpen} onClose={onClose} modalType={modalType}>
      <p>Are you sure you want to delete this movie?</p>
      <Button className="confirm delete-modal">confirm</Button>
    </Modal>
  );
}
