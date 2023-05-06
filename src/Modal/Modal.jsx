import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Button from '../Button/Button';

import './style.css';

ReactModal.setAppElement('body');

function Modal({
  children, onModalClose, isModalOpen, title,
}) {
  return (
    <ReactModal
      className="modal"
      overlayClassName="overlay"
      isOpen={isModalOpen}
      onRequestClose={onModalClose}
    >
      <Button onClick={onModalClose} className="close modal-close" />
      <div>
        <h2 className="modal-title">
          {title}
        </h2>
        {children}
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onModalClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
