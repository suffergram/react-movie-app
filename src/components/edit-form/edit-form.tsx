import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../button/button';
import { genres } from '../main/info';
import './style.css';

interface IFormInput {
  title: string;
  release_date: string;
  poster_path?: string;
  vote_average: number;
  genres: Array<string>;
  runtime?: number;
  overview?: string;
}

export default function EditForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

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
        return value;
      }),
    });
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
          placeholder="https://"
          inputMode="url"
          {...register('poster_path')}
        />
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
            min: 0,
            max: 10,
          })}
        />
      </label>
      <label>
        overview
        <textarea placeholder="Movie description" {...register('overview')} />
      </label>
      <div>
        <Button className="cancel modal-edit-button">reset</Button>
        <Button className="confirm modal-edit-button" type="submit">
          submit
        </Button>
      </div>
    </form>
  );
}
