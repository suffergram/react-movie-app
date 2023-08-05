import { useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import AppContext from '../app-context/app-context';
import { FormInput } from '../../types/form-input';
import RootState from '../../types/root-state';
import putMovie from '../../state/put-movie';
import Form from '../form/form';

export default function EditForm() {
  const { handleMovieModalClose, movie } = useContext(AppContext);

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  console.log(movie);
  const params: FormInput | undefined = movie
    ? {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        genres: movie.genres,
        runtime: movie.runtime,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        overview: movie.overview,
      }
    : undefined;

  const handleSubmit: SubmitHandler<FormInput> = async (data: FormInput) => {
    await new Promise<void>((resolve) => {
      dispatch(putMovie(data));
      resolve();
    });
    handleMovieModalClose();
  };

  return <Form onSubmit={handleSubmit} params={params} />;
}
