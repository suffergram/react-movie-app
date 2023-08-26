import { getUrlParams } from '../utils/utils';
import { MoviesDTO } from '../state/action-creators';
import { FormInput } from '../types/form-input';
import { SearchParamsType } from '../hooks/use-get-params';

export default class MovieService {
  static host = 'http://localhost:4000/movies';

  static async getMovies(params: SearchParamsType): Promise<MoviesDTO> {
    const urlParams = getUrlParams(params);
    const url = `${this.host}?${urlParams}`;

    const response = await fetch(url);

    return response.json();
  }

  static createMovie(data: FormInput) {
    return fetch(this.host, {
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
    }).then((response) => {
      if (!response.ok) return Promise.reject(new Error('response is not ok'));
      return response;
    });
  }

  static updateMovie(data: FormInput) {
    return fetch(this.host, {
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
    }).then((response) => {
      if (!response.ok) return Promise.reject(new Error('response is not ok'));
      return response.json();
    });
  }

  static deleteMovie(id: number) {
    const url = `${this.host}/${id}`;
    return fetch(url, {
      method: 'DELETE',
    });
  }

  static async getMovie(movieId: string | unknown) {
    const response = await fetch(`${this.host}/${movieId}`);

    if (!response.ok) {
      return Promise.reject(
        new Error('Bad Response', {
          cause: response,
        })
      );
    }

    return response.json();
  }
}
