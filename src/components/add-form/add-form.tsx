import { useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ModalContext } from '../../context/modal-context';
import { FormInput } from '../../types/form-input';
import { MovieForm } from '../movie-form/movie-form';
import { ModalState } from '../../types/modal-state';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { MovieService } from '../../services/movie-service';

export function AddForm() {
  const { handleModalOpen, handleModalClose } = useContext(ModalContext);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [params] = useGetParams();

  const handleSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    const path = `${pathname}?${searchParams.toString()}`;
    router.push(path);

    MovieService.createMovie(data)
      .then(() => MovieService.getMovies(params))
      .then(() => router.refresh())
      .then(() => {
        handleModalClose();
        handleModalOpen({
          name: ModalState.Congrat,
        });
      });
  };

  return <MovieForm onSubmit={handleSubmit} />;
}
