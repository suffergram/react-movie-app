import { useContext } from 'react';
import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';
import AppContext from '../AppContext/AppContext';

type MovieModalProps = {
  isModalOpen: boolean,
  title: string,
};

export default function MovieModal(
  { isModalOpen, title }: MovieModalProps,
) {
  const { handleMovieModalClose } = useContext(AppContext);

  return (
    <Modal isModalOpen={isModalOpen} onModalClose={handleMovieModalClose} title={title}>
      <EditForm />
    </Modal>
  );
}
