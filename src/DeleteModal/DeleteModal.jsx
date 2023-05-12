import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

import './style.css';

function DeleteModal({ onModalClose, isModalOpen }) {
  return (
    <Modal isModalOpen={isModalOpen} onModalClose={onModalClose} title="delete movie">
      <p>Are you sure you want to delete this movie?</p>
      <Button className="confirm delete-modal">confirm</Button>
    </Modal>
  );
}

DeleteModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default DeleteModal;
