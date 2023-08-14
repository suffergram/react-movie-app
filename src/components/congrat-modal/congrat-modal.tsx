import { useContext } from 'react';
import Modal from '../modal/modal';
import ModalContext from '../../context/modal-context';
import './style.css';

type CongratModalProps = {
  isModalOpen: boolean;
};

export default function CongratModal({ isModalOpen }: CongratModalProps) {
  const { handleModalClose } = useContext(ModalContext);

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalClose={handleModalClose}
      title="congratulations"
      icon={
        <div className="modal-icon">
          <div className="modal-icon-check" />
        </div>
      }
    >
      <div className="congrat-modal-content">
        <p className="congrat-modal-p">
          The movie has been added to database successfully
        </p>
      </div>
    </Modal>
  );
}
