import { useContext } from 'react';
import Modal from '../modal/modal';
import AppContext from '../app-context/app-context';
import './style.css';
import ModalTitle from '../../types/modal-title';

type CongratModalProps = {
  isModalOpen: boolean;
};

export default function CongratModal({ isModalOpen }: CongratModalProps) {
  const { handleCongratModalClose } = useContext(AppContext);

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalClose={handleCongratModalClose}
      title={ModalTitle.Congratulations}
    >
      <div className="congrat-modal-content">
        <p className="congrat-modal-p">
          The movie has been added to database successfully
        </p>
      </div>
    </Modal>
  );
}
