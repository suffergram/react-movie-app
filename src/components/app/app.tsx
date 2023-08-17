import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../layout/layout';
import HomePage from '../../pages/home-page/home-page';
import MoviePage from '../../pages/movie-page/movie-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import InfoProvider from '../info-provider/info-provider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path=":movies/:movieId" element={<MoviePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default function App() {
  return (
    <InfoProvider>
      <RouterProvider router={router} />
    </InfoProvider>
  );
}
