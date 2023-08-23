import { getUrlParams } from '../utils/utils';
import { MoviesDTO } from '../state/action-creators';
import { FormInput } from '../types/form-input';

export default class MovieService {
  static host = 'http://localhost:4000/movies';

  static getMovies(): Promise<MoviesDTO> {
    const urlParams = getUrlParams();
    const url = `${this.host}?${urlParams}`;

    return fetch(url).then((response) => response.json());
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
    const res = await fetch(`${this.host}/${movieId}`);

    if (!res.ok) {
      throw new Response('', {
        status: res.status,
        statusText: 'the movie is not found',
      });
    }

    return res.json();
  }
}
