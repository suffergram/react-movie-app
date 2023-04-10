import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
import { useState } from "react";

export default function App() {
    const [addWindow, setAddWindow] = useState(false);
    const openWindow = () => setAddWindow(true);
    const closeWindow = () => setAddWindow(false);

    return (
        <>
            <Header onAddMovie={openWindow} />
            <Main />
            <Footer />
            {addWindow ? <Modal toOpen={addWindow} toClose={closeWindow} /> : null}
        </>
    );
}
