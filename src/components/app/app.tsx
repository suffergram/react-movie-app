import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import ModalProvider from '../modal-provider/modal-provider';
import InfoProvider from '../info-provider/info-provider';

export default function App() {
  return (
    <InfoProvider>
      <ModalProvider>
        <Header />
        <Main />
        <Footer />
      </ModalProvider>
    </InfoProvider>
  );
}
