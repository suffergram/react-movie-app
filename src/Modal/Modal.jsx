import ReactModal from "react-modal";
import Button from "../Button/Button"
import './style.css';

ReactModal.setAppElement('body');

export default function Modal({ children, onClose, ...delegatedProps }) {
    return (
        <ReactModal 
        className="modal" 
        overlayClassName="overlay"
        {...delegatedProps} 
        onRequestClose={onClose}
        >
            <Button onClick={onClose} className="close" />
            {children}
        </ReactModal>
    );
}
