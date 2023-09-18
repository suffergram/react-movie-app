import { ModalProvider } from '../../components/modal-provider/modal-provider';
import { Header } from '../../components/header/header';
import { Main } from '../../components/main/main';

export function HomePage() {
  return (
    <ModalProvider>
      <Header />
      <Main />
    </ModalProvider>
  );
}
