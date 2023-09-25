import { PropsWithChildren, ReactNode } from 'react';
import {
  StyledModal,
  modalBackground,
  ModalCloseButton,
  ModalTitle,
} from './style';

StyledModal.setAppElement('body');

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
    <StyledModal
      style={modalBackground}
      isOpen={isModalOpen}
      onRequestClose={onModalClose}
    >
      <ModalCloseButton onClick={onModalClose}>╳</ModalCloseButton>
      <div>
        {icon}
        <ModalTitle>{title}</ModalTitle>
        {children}
      </div>
    </StyledModal>
  );
}
