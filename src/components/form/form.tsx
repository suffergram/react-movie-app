import { useForm, SubmitHandler } from 'react-hook-form';
import clsx from 'clsx';
import Button from '../button/button';
import { genres } from '../main/info';
import { FormInput } from '../../types/form-input';
import { FormField } from '../../types/edit-form-field';
import './style.css';

type FormProps = {
  onSubmit: SubmitHandler<FormInput>;
  params?: FormInput | undefined;
};

export default function Form({ onSubmit, params }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: params,
  });

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
          className={errors.title?.message ? 'modal-input-error' : null}
          placeholder="Select Title"
          inputMode="text"
          {...register(Title, { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors.title?.message}</p>
      </label>
      <label>
        release date
        <input
          className={errors.release_date?.message ? 'modal-input-error' : null}
          type="date"
          placeholder="Select Date"
          {...register(ReleaseDate, {
            required: requiredMessage,
          })}
        />
        <p className="modal-submit-error">{errors.release_date?.message}</p>
      </label>
      <label>
        genre
        <select
          className={clsx(
            'modal-genre-select',
            errors.genres?.message && 'modal-input-error'
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
        <p className="modal-submit-error">{errors.genres?.message}</p>
      </label>
      {/* <label>
        genres
        <Selector
          options={movie ? movie.genres : []}
          values={[]}
          onChange={() => {}}
          // register={{ ...register(Genres, { required: requiredMessage }) }}
        />
      </label> */}
      <label>
        runtime
        <input
          className={errors.runtime?.message ? 'modal-input-error' : null}
          placeholder="minutes"
          inputMode="numeric"
          type="number"
          step="1"
          min="0"
          max="999"
          {...register(Runtime, { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors.runtime?.message}</p>
      </label>
      <label>
        movie url
        <input
          className={errors.poster_path?.message ? 'modal-input-error' : null}
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
