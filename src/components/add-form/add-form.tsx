import { useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import AppContext from '../app-context/app-context';
import { FormInput } from '../../types/form-input';
import postMovie from '../../state/post-movie';
import RootState from '../../types/root-state';
import Form from '../form/form';

export default function AddForm() {
  const { handleCongratModalOpen, handleMovieModalClose } =
    useContext(AppContext);

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleSubmit: SubmitHandler<FormInput> = async (data: FormInput) => {
    await new Promise<void>((resolve) => {
      dispatch(postMovie(data));
      resolve();
    });
    handleCongratModalOpen();
    handleMovieModalClose();
  };

  return <Form onSubmit={handleSubmit} />;
}
