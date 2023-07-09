import { useContext } from 'react';
import Modal from '../modal/modal';
import EditForm from '../edit-form/edit-form';
import AppContext from '../app-context/app-context';

type MovieModalProps = {
  isModalOpen: boolean;
  title: string;
};

export default function MovieModal({ isModalOpen, title }: MovieModalProps) {
  const { handleMovieModalClose } = useContext(AppContext);

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalClose={handleMovieModalClose}
      title={title}
    >
      <EditForm />
    </Modal>
  );
}
