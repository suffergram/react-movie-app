import ReactModal from 'react-modal';
import { PropsWithChildren, ReactNode } from 'react';
import Button from '../button/button';
import './style.css';

ReactModal.setAppElement('body');

type ModalProps = {
  onModalClose: () => void;
  isModalOpen: boolean;
  title: string;
  icon?: ReactNode;
};

export default function Modal({
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
      <Button onClick={onModalClose} className="close modal-close" />
      <div>
        {icon}
        <h2 className="modal-title">{title}</h2>
        {children}
      </div>
    </ReactModal>
  );
}
