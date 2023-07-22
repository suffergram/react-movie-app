import ReactModal from 'react-modal';
import { PropsWithChildren } from 'react';
import Button from '../button/button';
import './style.css';
import ModalTitle from '../../types/modal-title';

ReactModal.setAppElement('body');

type ModalProps = {
  onModalClose: () => void;
  isModalOpen: boolean;
  title: string;
};

export default function Modal({
  children,
  onModalClose,
  isModalOpen,
  title,
}: PropsWithChildren<ModalProps>) {
  return (
    <ReactModal
      className="modal"
      overlayClassName="overlay"
      isOpen={isModalOpen}
      onRequestClose={onModalClose}
    >
      <Button onClick={onModalClose} className="close modal-close" />
      <div>
        {title === ModalTitle.Congratulations && (
          <div className="modal-icon">
            <div className="modal-icon-check" />
          </div>
        )}
        <h2 className="modal-title">{title}</h2>
        {children}
      </div>
    </ReactModal>
  );
}
