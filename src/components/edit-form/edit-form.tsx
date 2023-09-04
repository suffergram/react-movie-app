import { useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ModalContext } from '../../context/modal-context';
import { FormInput } from '../../types/form-input';
import { RootState } from '../../types/root-state';
import { putMovie } from '../../state/put-movie';
import { MovieForm } from '../movie-form/movie-form';
import { ModalState } from '../../types/modal-state';

export function EditForm() {
  const { handleModalClose, modal } = useContext(ModalContext);

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const params: FormInput | undefined =
    modal?.name === ModalState.Edit ? modal.data : undefined;

  const handleSubmit: SubmitHandler<FormInput> = async (data: FormInput) => {
    await new Promise<void>((resolve) => {
      dispatch(putMovie(data));
      resolve();
    });
    handleModalClose();
  };

  return <MovieForm onSubmit={handleSubmit} params={params} />;
}
