import Modal from "../Modal/Modal";

export default function DeleteModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>
                {<h2>delete</h2>}
            </div>
        </Modal>
    );
}