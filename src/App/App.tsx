import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ModalProvider from '../ModalProvider/ModalProvider';

export default function App() {
  return (
    <ModalProvider>
      <Header />
      <Main />
      <Footer />
    </ModalProvider>
  );
}
