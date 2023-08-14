import { useContext } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import clsx from 'clsx';
import Button from '../button/button';
import { genres } from '../main/info';
import { FormInput } from '../../types/form-input';
import { FormField } from '../../types/edit-form-field';
import GenreSelect from '../genre-select/genre-select';
import ModalContext from '../../context/modal-context';
import { ModalState } from '../../types/modal-state';
import './style.css';

type FormProps = {
  onSubmit: SubmitHandler<FormInput>;
  params?: FormInput | undefined;
};

export default function MovieForm({ onSubmit, params }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInput>({
    defaultValues: params,
  });

  const { modal } = useContext(ModalContext);

  const {
    Title,
    ReleaseDate,
    Genres,
    Runtime,
    PosterPath,
    VoteAverage,
    Overview,
  } = FormField;

  const requiredMessage = 'This is required';

  return (
    <form className="modal-edit-form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        title
        <input
          className={errors[Title]?.message ? 'modal-input-error' : undefined}
          placeholder="Select Title"
          inputMode="text"
          {...register(Title, { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors[Title]?.message}</p>
      </label>
      <label>
        release date
        <input
          className={
            errors[ReleaseDate]?.message ? 'modal-input-error' : undefined
          }
          type="date"
          placeholder="Select Date"
          {...register(ReleaseDate, {
            required: requiredMessage,
          })}
        />
        <p className="modal-submit-error">{errors[ReleaseDate]?.message}</p>
      </label>
      {/* <label>
        genre
        <select
          className={clsx(
            'modal-genre-select',
            errors[Genres]?.message && 'modal-input-error'
          )}
          {...register(Genres, { required: requiredMessage })}
        >
          <option value="">Select Genre</option>
          {genres.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <p className="modal-submit-error">{errors[Genres]?.message}</p>
      </label> */}
      <label>
        genres
        <Controller
          control={control}
          name={Genres}
          rules={{ required: true }}
          render={({ field }) => <GenreSelect {...field} />}
        />
        <p className="modal-submit-error">{errors[Genres]?.message}</p>
      </label>
      <label>
        runtime
        <input
          className={errors[Runtime]?.message ? 'modal-input-error' : undefined}
          placeholder="minutes"
          inputMode="numeric"
          type="number"
          step="1"
          min="0"
          max="999"
          {...register(Runtime, { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors[Runtime]?.message}</p>
      </label>
      <label>
        movie url
        <input
          className={
            errors[PosterPath]?.message ? 'modal-input-error' : undefined
          }
          placeholder="https://"
          inputMode="url"
          {...register(PosterPath, {
            required: false,
            pattern: {
              value: /((https)|(HTTPS)):\/\/\w+\.\w+/,
              message: 'Invalid path',
            },
          })}
        />
        <p className="modal-submit-error">{errors[PosterPath]?.message}</p>
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
          {...register(VoteAverage, {
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
          {...(register(Overview), { required: false })}
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
