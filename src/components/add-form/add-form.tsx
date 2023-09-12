import { useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ModalContext } from '../../context/modal-context';
import { FormInput } from '../../types/form-input';
import { postMovie } from '../../state/post-movie/post-movie';
import { RootState } from '../../types/root-state';
import { MovieForm } from '../movie-form/movie-form';
import { ModalState } from '../../types/modal-state';
import { useGetParams } from '../../hooks/use-get-params';

export function AddForm() {
  const { handleModalOpen, handleModalClose } = useContext(ModalContext);

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const [params] = useGetParams();

  const handleSubmit: SubmitHandler<FormInput> = async (data: FormInput) => {
    await new Promise<void>((resolve) => {
      dispatch(postMovie(data, params));
      resolve();
    });
    handleModalClose();
    handleModalOpen({
      name: ModalState.Congrat,
    });
  };

  return <MovieForm onSubmit={handleSubmit} />;
}
