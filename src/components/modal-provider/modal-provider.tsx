import { useState, useMemo, PropsWithChildren } from 'react';
import EditMovieModal from '../edit-movie-modal/edit-movie-modal';
import AddMovieModal from '../add-movie-modal/add-movie-modal';
import DeleteModal from '../delete-modal/delete-modal';
import CongratModal from '../congrat-modal/congrat-modal';
import ModalContext from '../../context/modal-context';
import { ModalState } from '../../types/modal-state';
import { Movie } from '../../types/movie';

export type ModalType =
  | {
      name: ModalState.Add;
    }
  | {
      name: ModalState.Edit;
      data: Movie;
    }
  | {
      name: ModalState.Delete;
      data: Movie;
    }
  | {
      name: ModalState.Congrat;
    };

export default function ModalProvider({ children }: PropsWithChildren) {
  const [modal, setModal] = useState<ModalType | null>(null);

  const modalContextValue = useMemo(
    () => ({
      handleModalOpen: (modalState: ModalType) => setModal(modalState),
      handleModalClose: () => setModal(null),
      modal,
    }),
    [modal]
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
      <EditMovieModal isModalOpen={modal?.name === ModalState.Edit} />
      <AddMovieModal isModalOpen={modal?.name === ModalState.Add} />
      <DeleteModal isModalOpen={modal?.name === ModalState.Delete} />
      <CongratModal isModalOpen={modal?.name === ModalState.Congrat} />
    </ModalContext.Provider>
  );
}
