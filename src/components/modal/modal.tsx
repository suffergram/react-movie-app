import ReactModal from 'react-modal';
import { PropsWithChildren, ReactNode } from 'react';
import './style.css';

ReactModal.setAppElement('body');

type ModalProps = {
  onModalClose: () => void;
  isModalOpen: boolean;
  title: string;
  icon?: ReactNode;
};

export function Modal({
  children,
  onModalClose,
  isModalOpen,
  title,
  icon,
}: PropsWithChildren<ModalProps>) {
  return (
    <ReactModal
      className="modal"
      overlayClassName="overlay"
      isOpen={isModalOpen}
      onRequestClose={onModalClose}
    >
      <button
        type="button"
        onClick={onModalClose}
        className="close modal-close"
      >
        ╳
      </button>
      <div>
        {icon}
        <h2 className="modal-title">{title}</h2>
        {children}
      </div>
    </ReactModal>
  );
}
