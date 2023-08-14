import { useContext } from 'react';
import Modal from '../modal/modal';
import EditForm from '../edit-form/edit-form';
import ModalContext from '../../context/modal-context';

type MovieModalProps = {
  isModalOpen: boolean;
};

export default function EditMovieModal({ isModalOpen }: MovieModalProps) {
  const { handleModalClose } = useContext(ModalContext);

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalClose={handleModalClose}
      title="edit movie"
    >
      <EditForm />
    </Modal>
  );
}
