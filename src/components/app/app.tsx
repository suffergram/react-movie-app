import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../layout/layout';
import HomePage from '../../pages/home-page/home-page';
import MoviePage, { movieLoader } from '../../pages/movie-page/movie-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ErrorPage from '../../pages/error-page/error-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="movies/:movieId"
        element={<MoviePage />}
        loader={movieLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
