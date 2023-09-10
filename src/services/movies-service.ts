import { getUrlParams } from '../utils/utils';
import { MoviesDTO } from '../state/action-creators';
import { FormInput } from '../types/form-input';
import { SearchParamsType } from '../hooks/use-get-params';

export class MovieService {
  static host = 'http://localhost:4000/movies';

  static responseError = 'Bad Response';

  static async getMovies(params: SearchParamsType): Promise<MoviesDTO> {
    const urlParams = getUrlParams(params);
    const url = `${this.host}?${urlParams}`;

    const response = await fetch(url);

    if (!response.ok) return Promise.reject(new Error(this.responseError));

    return response.json();
  }

  static async createMovie(data: FormInput) {
    const response = await fetch(this.host, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data, (key, value) => {
        if (key === 'vote_average' || key === 'runtime') return Number(value);
        if (value === '') return undefined;
        return value;
      }),
    });

    if (!response.ok) return Promise.reject(new Error(this.responseError));

    return response.json();
  }

  static async updateMovie(data: FormInput) {
    const response = await fetch(this.host, {
      method: 'PUT',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data, (key, value) => {
        if (['vote_average', 'runtime', 'id'].includes(key))
          return Number(value);
        if (value === '') return undefined;
        return value;
      }),
    });

    if (!response.ok) return Promise.reject(new Error(this.responseError));

    return response.json();
  }

  static async deleteMovie(id: number) {
    const url = `${this.host}/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) return Promise.reject(new Error(this.responseError));

    return response.json();
  }

  static async getMovie(movieId: string | unknown) {
    const response = await fetch(`${this.host}/${movieId}`);

    if (!response.ok) {
      return Promise.reject(
        new Error(this.responseError, {
          cause: response,
        })
      );
    }

    return response.json();
  }
}
