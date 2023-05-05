import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';

export default function MovieModal({ isOpen, onClose, modalType }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} modalType={modalType}>
                <EditForm />
        </Modal>
    );
}
