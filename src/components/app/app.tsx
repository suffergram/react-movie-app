import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from '../layout/layout';
import { HomePage } from '../../pages/home-page/home-page';
import { MoviePage, movieLoader } from '../../pages/movie-page/movie-page';
import { ErrorPage } from '../../pages/error-page/error-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="movies/:movieId"
        element={<MoviePage />}
        loader={movieLoader}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}
