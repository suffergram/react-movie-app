import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../button/button';
import { genres } from '../main/info';
import './style.css';

interface IFormInput {
  title: string;
  release_date: string;
  url: string;
  vote_average: number;
  genres: Array<string>;
  runtime: number;
  overview: string;
}

export default function EditForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const requiredMessage = 'This is required';

  return (
    <form className="modal-edit-form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        title
        <input
          placeholder="Select Title"
          inputMode="text"
          {...register('title', { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors.title?.message}</p>
      </label>
      <label>
        release date
        <input
          type="date"
          placeholder="Select Date"
          {...register('release_date', { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors.release_date?.message}</p>
      </label>
      <label>
        movie url
        <input
          placeholder="https://"
          inputMode="url"
          {...register('url', { required: requiredMessage })}
        />
        <p className="modal-submit-error">{errors.url?.message}</p>
      </label>
      <label>
        rating
        <input
          placeholder="7.8"
          type="number"
          step="0.1"
          min="0"
          max="10"
          {...register('vote_average', {
            required: requiredMessage,
            pattern: /[+-]?([0-9]*[.])?[0-9]+/, // TODO: fix this regex
            min: 0,
            max: 10,
          })}
        />
        <p className="modal-submit-error">{errors.vote_average?.message}</p>
      </label>
      <label>
        genre
        <select
          className="modal-genre-select"
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
          placeholder="minutes"
          {...register('runtime', {
            required: requiredMessage,
            pattern: /([0-9]|[1-9][0-9]|[1-9][0-9][0-9])/, // TODO: fix this regex
          })}
        />
        <p className="modal-submit-error">{errors.runtime?.message}</p>
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
