import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';

type MovieModalProps = {
  onModalClose: () => void,
  isModalOpen: boolean,
  title: string,
};

export default function MovieModal(
  { onModalClose, isModalOpen, title }: MovieModalProps,
) {
  return (
    <Modal isModalOpen={isModalOpen} onModalClose={onModalClose} title={title}>
      <EditForm />
    </Modal>
  );
}
