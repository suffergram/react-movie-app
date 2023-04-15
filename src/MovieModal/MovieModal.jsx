import Modal from "../Modal/Modal";
import EditForm from "../EditForm/EditForm";

export default function MovieModal({ isOpen, onClose, modalType }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>
                {modalType === 'add' ? <h2>add movie</h2> : modalType === 'edit' ? <h2>edit movie</h2> : null}
                <EditForm />
            </div>
        </Modal>
    );
}