import React from 'react';
import { ModalType } from '../components/modal-provider/modal-provider';

type ModalContextType = {
  handleModalOpen(modalState: ModalType): void;
  handleModalClose(): void;
  modal: ModalType | null;
};

export const ModalContext = React.createContext<ModalContextType>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleModalOpen: (modalState: ModalType) => {
    // init value
  },
  handleModalClose: () => {
    // init value
  },
  modal: null,
});
