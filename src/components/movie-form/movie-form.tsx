import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Button from '../button/button';
import { FormInput } from '../../types/form-input';
import { FormField } from '../../types/edit-form-field';
import GenreSelect from '../genre-select/genre-select';
import './style.css';

type FormProps = {
  onSubmit: SubmitHandler<FormInput>;
  params?: FormInput | undefined;
};

const initialParams: FormInput = {
  title: '',
  release_date: '',
  poster_path: '',
  vote_average: 0,
  genres: [],
  runtime: 0,
  overview: '',
};

export default function MovieForm({
  onSubmit,
  params = initialParams,
}: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormInput>({
    defaultValues: params,
  });

  const requiredMessage = 'This is required';

  const handleReset = () => reset();

  return (
    <form className="modal-edit-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="movie-form-label">
        title
        <input
          className={
            errors[FormField.Title]?.message ? 'modal-input-error' : undefined
          }
          placeholder="Select Title"
          inputMode="text"
          {...register(FormField.Title, { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors[FormField.Title]?.message}</p>
      </label>
      <label className="movie-form-label">
        release date
        <input
          className={
            errors[FormField.ReleaseDate]?.message
              ? 'modal-input-error'
              : undefined
          }
          type="date"
          placeholder="Select Date"
          {...register(FormField.ReleaseDate, {
            required: requiredMessage,
          })}
        />
        <p className="modal-submit-error">
          {errors[FormField.ReleaseDate]?.message}
        </p>
      </label>
      <label className="genre-select-container movie-form-label">
        genres
        <Controller
          control={control}
          name={FormField.Genres}
          rules={{
            validate: (value) => (value.length === 0 ? requiredMessage : true),
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <GenreSelect
              value={value}
              onChange={onChange}
              className={error ? 'modal-input-error' : undefined}
            />
          )}
        />
        <p className="modal-submit-error">
          {errors[FormField.Genres]?.message}
        </p>
      </label>
      <label className="movie-form-label">
        runtime
        <input
          className={
            errors[FormField.Runtime]?.message ? 'modal-input-error' : undefined
          }
          placeholder="minutes"
          inputMode="numeric"
          type="number"
          step="1"
          min="0"
          max="999"
          {...register(FormField.Runtime, { required: requiredMessage })}
        />
        <p className="modal-submit-error">
          {errors[FormField.Runtime]?.message}
        </p>
      </label>
      <label className="movie-form-label">
        movie url
        <input
          className={
            errors[FormField.PosterPath]?.message
              ? 'modal-input-error'
              : undefined
          }
          placeholder="https://"
          inputMode="url"
          {...register(FormField.PosterPath, {
            required: false,
            pattern: {
              value: /((https)|(HTTPS)):\/\/\w+\.\w+/,
              message: 'Invalid path',
            },
          })}
        />
        <p className="modal-submit-error">
          {errors[FormField.PosterPath]?.message}
        </p>
      </label>
      <label className="movie-form-label">
        rating
        <input
          placeholder="7.8"
          inputMode="numeric"
          type="number"
          lang="en"
          step="0.1"
          min="0"
          max="10"
          {...register(FormField.VoteAverage, {
            required: false,
            min: 0,
            max: 10,
          })}
        />
      </label>
      <label className="movie-form-label">
        overview
        <textarea
          placeholder="Movie description"
          {...register(FormField.Overview, { required: false })}
        />
      </label>
      <div>
        <Button className="cancel modal-edit-button" onClick={handleReset}>
          reset
        </Button>
        <Button className="confirm modal-edit-button" type="submit">
          submit
        </Button>
      </div>
    </form>
  );
}
