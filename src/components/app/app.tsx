import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import ModalProvider from '../modal-provider/modal-provider';

export default function App() {
  return (
    <ModalProvider>
      <Header />
      <Main />
      <Footer />
    </ModalProvider>
  );
}
