import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import "./style.css";

export default function DeleteModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="delete-modal">
                <h2>delete movie</h2>
                <p>Are you sure you want to delete this movie?</p>
                <Button className="confirm">confirm</Button>
            </div>
        </Modal>
    );
}