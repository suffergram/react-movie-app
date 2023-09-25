import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button } from '../button/button';
import { FormInput } from '../../types/form-input';
import { FormField } from '../../types/edit-form-field';
import { GenreSelect } from '../genre-select/genre-select';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  SubmitErrorMessage,
  TextareaContainer,
  StyledTextarea,
  ButtonContainer,
} from './style';

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

export function MovieForm({ onSubmit, params = initialParams }: FormProps) {
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
    <StyledForm aria-label="movie-form" onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>
        title
        <StyledInput
          $error={!!errors[FormField.Title]?.message}
          placeholder="Select Title"
          inputMode="text"
          {...register(FormField.Title, { required: requiredMessage })}
        />
        <SubmitErrorMessage>
          {errors[FormField.Title]?.message}
        </SubmitErrorMessage>
      </StyledLabel>
      <StyledLabel>
        release date
        <StyledInput
          $error={!!errors[FormField.ReleaseDate]?.message}
          type="date"
          placeholder="Select Date"
          {...register(FormField.ReleaseDate, {
            required: requiredMessage,
          })}
        />
        <SubmitErrorMessage>
          {errors[FormField.ReleaseDate]?.message}
        </SubmitErrorMessage>
      </StyledLabel>
      <StyledLabel>
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
                error={!!error}
              />
            )}
        />
        <SubmitErrorMessage>
          {errors[FormField.Genres]?.message}
        </SubmitErrorMessage>
      </StyledLabel>
      <StyledLabel>
        runtime
        <StyledInput
          $error={!!errors[FormField.Runtime]?.message}
          placeholder="minutes"
          inputMode="numeric"
          type="number"
          step="1"
          min="0"
          max="999"
          {...register(FormField.Runtime, { required: requiredMessage })}
        />
        <SubmitErrorMessage>
          {errors[FormField.Runtime]?.message}
        </SubmitErrorMessage>
      </StyledLabel>
      <StyledLabel>
        movie url
        <StyledInput
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
        <SubmitErrorMessage>
          {errors[FormField.PosterPath]?.message}
        </SubmitErrorMessage>
      </StyledLabel>
      <StyledLabel>
        rating
        <StyledInput
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
      </StyledLabel>
      <TextareaContainer>
        overview
        <StyledTextarea
          placeholder="Movie description"
          {...register(FormField.Overview, { required: false })}
        />
      </TextareaContainer>
      <ButtonContainer>
        <Button onClick={handleReset} variant="secondary">
          reset
        </Button>
        <Button type="submit" variant="primary">
          submit
        </Button>
      </ButtonContainer>
    </StyledForm>
  );
}
