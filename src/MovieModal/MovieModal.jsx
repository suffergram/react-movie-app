import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';

function MovieModal({ onModalClose, isModalOpen, title }) {
  return (
    <Modal isModalOpen={isModalOpen} onModalClose={onModalClose} title={title}>
      <EditForm />
    </Modal>
  );
}

MovieModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieModal;
