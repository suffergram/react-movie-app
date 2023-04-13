import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
import { useState } from "react";

export default function App() {
    const [modal, setModal] = useState(false);
    const openWindow = (name) => {
        setModalType(name);
        setModal(true);
    }
    const closeWindow = () => setModal(false);

    const [modalType, setModalType] = useState(null);

    return (
        <>
            <Header newModal={openWindow} />
            <Main newModal={openWindow} />
            <Footer />
            {modal ? <Modal type={modalType} toClose={closeWindow} /> : null}
        </>
    );
}
