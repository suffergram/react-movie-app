import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Button from '../button/button';
import { genres } from '../main/info';
import AppContext from '../app-context/app-context';
import { FormInput } from '../../types/form-input';
import './style.css';
import postMovie from '../../state/post-movie';
import RootState from '../../types/root-state';

type EditFormProps = {
  onModalClose: () => void;
};

export default function EditForm({ onModalClose }: EditFormProps) {
  const { handleCongratModalOpen, movie } = useContext(AppContext);

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const { sort, filter, offset } = useSelector(
    (state: RootState) => state.movieState
  );

  const params = {
    title: movie?.title,
    release_date: movie?.release_date,
    genres: movie?.genres,
    runtime: movie?.runtime,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: params,
  });

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    dispatch(
      postMovie(
        data,
        onModalClose,
        handleCongratModalOpen,
        filter,
        sort,
        offset
      )
    );
  };

  const requiredMessage = 'This is required';

  return (
    <form className="modal-edit-form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        title
        <input
          className={errors.title?.message ? 'modal-input-error' : ''}
          placeholder="Select Title"
          inputMode="text"
          {...register('title', { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors.title?.message}</p>
      </label>
      <label>
        release date
        <input
          className={errors.release_date?.message ? 'modal-input-error' : ''}
          type="date"
          placeholder="Select Date"
          {...register('release_date', { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors.release_date?.message}</p>
      </label>
      <label>
        genre
        <select
          className={`modal-genre-select ${
            errors.genres?.message ? 'modal-input-error' : ''
          }`}
          {...register('genres', { required: requiredMessage })}
        >
          <option value="">Select Genre</option>
          {genres.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <p className="modal-submit-error">{errors.genres?.message}</p>
      </label>
      <label>
        runtime
        <input
          className={errors.runtime?.message ? 'modal-input-error' : ''}
          placeholder="minutes"
          inputMode="numeric"
          type="number"
          step="1"
          min="0"
          max="999"
          {...register('runtime', { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors.runtime?.message}</p>
      </label>
      <label>
        movie url
        <input
          className={errors.poster_path?.message ? 'modal-input-error' : ''}
          placeholder="https://"
          inputMode="url"
          {...register('poster_path', {
            required: false,
            pattern: {
              value: /((https)|(HTTPS)):\/\/\w+\.\w+/,
              message: 'Invalid path',
            },
          })}
        />
        <p className="modal-submit-error">{errors.poster_path?.message}</p>
      </label>
      <label>
        rating
        <input
          placeholder="7.8"
          inputMode="numeric"
          type="number"
          lang="en"
          step="0.1"
          min="0"
          max="10"
          {...register('vote_average', {
            required: false,
            min: 0,
            max: 10,
          })}
        />
      </label>
      <label>
        overview
        <textarea
          placeholder="Movie description"
          {...(register('overview'), { required: false })}
        />
      </label>
      <div>
        <Button className="cancel modal-edit-button" type="reset">
          reset
        </Button>
        <Button className="confirm modal-edit-button" type="submit">
          submit
        </Button>
      </div>
    </form>
  );
}
