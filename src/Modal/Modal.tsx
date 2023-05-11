import ReactModal from 'react-modal';
import { ReactNode } from 'react';
import Button from '../Button/Button';

import './style.css';

ReactModal.setAppElement('body');

export default function Modal(
  {
    children,
    onModalClose,
    isModalOpen,
    title,
  }:
  {
    children: ReactNode,
    onModalClose: () => void,
    isModalOpen: boolean,
    title: string
  },
) {
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
