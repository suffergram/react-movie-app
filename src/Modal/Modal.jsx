import ReactModal from "react-modal";
import Button from "../Button/Button"
import './style.css';

ReactModal.setAppElement('body');

export default function Modal({ children, onClose, isOpen, modalType }) {
    return (
        <ReactModal 
        className="modal" 
        overlayClassName="overlay"
        isOpen={isOpen} 
        onRequestClose={onClose}
        >
            <Button onClick={onClose} className="close modal-close" />
            <div>
                <h2 className="modal-title">{modalType} movie</h2>
                {children}
            </div>
        </ReactModal>
    );
}
