import { useContext } from 'react';
import Modal from '../modal/modal';
import EditForm from '../edit-form/edit-form';
import AppContext from '../app-context/app-context';
import AddForm from '../add-form/add-form';
import ModalTitles from '../../types/modal-title';

type MovieModalProps = {
  isModalOpen: boolean;
  title: string;
  type: string | null;
};

export default function MovieModal({
  isModalOpen,
  title,
  type,
}: MovieModalProps) {
  const { handleMovieModalClose } = useContext(AppContext);

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalClose={handleMovieModalClose}
      title={title}
    >
      {type === ModalTitles.Add ? <AddForm /> : <EditForm />}
    </Modal>
  );
}
