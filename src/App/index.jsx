import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import { useState } from "react";

export default function App() {
    const [addWindow, setAddWindow] = useState(false);

    return (
        <>
            <Header onAddMovie={() => setAddWindow(true)} />
            <Main />
            <Footer />
            {addWindow ? <div className="bg" /> : null}
        </>
    );
}
