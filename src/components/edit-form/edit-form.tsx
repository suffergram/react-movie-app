import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../button/button';
import { genres } from '../main/info';
import AppContext from '../app-context/app-context';
import './style.css';

interface IFormInput {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genres: Array<string>;
  runtime: number;
  overview: string;
}

type EditFormProps = {
  onModalClose: () => void;
};

export default function EditForm({ onModalClose }: EditFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { handleCongratModalOpen } = useContext(AppContext);

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data, (key, value) => {
        if (key === 'vote_average' || key === 'runtime') return Number(value);
        if (key === 'genres') return [value];
        if (value === '') return undefined;
        return value;
      }),
    })
      .then((response) => {
        if (response.ok) onModalClose();
      })
      .then(handleCongratModalOpen); // TODO: open congrats modal here after submit
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
