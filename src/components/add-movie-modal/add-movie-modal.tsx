import { useContext } from 'react';
import Modal from '../modal/modal';
import ModalContext from '../../context/modal-context';
import AddForm from '../add-form/add-form';

type MovieModalProps = {
  isModalOpen: boolean;
};

export default function AddMovieModal({ isModalOpen }: MovieModalProps) {
  const { handleModalClose } = useContext(ModalContext);

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalClose={handleModalClose}
      title="add movie"
    >
      <AddForm />
    </Modal>
  );
}
