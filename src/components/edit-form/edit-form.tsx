import { useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ModalContext } from '../../context/modal-context';
import { FormInput } from '../../types/form-input';
import { MovieForm } from '../movie-form/movie-form';
import { ModalState } from '../../types/modal-state';
import { MovieService } from '../../services/movie-service';

export function EditForm() {
  const { handleModalClose, modal } = useContext(ModalContext);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params: FormInput | undefined =
    modal?.name === ModalState.Edit ? modal.data : undefined;

  const handleSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    const path = `${pathname}?${searchParams.toString()}`;
    router.push(path);

    MovieService.updateMovie(data).then(() => router.refresh());

    handleModalClose();
  };

  return <MovieForm onSubmit={handleSubmit} params={params} />;
}
