import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import useLoadMovies from '../Hooks/loadMovies';
import ModalProvider from '../ModalProvider/ModalProvider';

export default function App() {
  const { isLoading, error, movies } = useLoadMovies();

  return (
    <ModalProvider>
      <Header />
      <Main isLoading={isLoading} movies={movies} loadingError={error} />
      <Footer />
    </ModalProvider>
  );
}
