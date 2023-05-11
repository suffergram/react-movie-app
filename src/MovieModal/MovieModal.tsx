import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';

export default function MovieModal(
  { onModalClose, isModalOpen, title }:
  { onModalClose: () => void, isModalOpen: boolean, title: string },
) {
  return (
    <Modal isModalOpen={isModalOpen} onModalClose={onModalClose} title={title}>
      <EditForm />
    </Modal>
  );
}
