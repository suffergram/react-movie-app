import { Dispatch } from 'react';
import { AnyAction, MiddlewareAPI } from 'redux';

const logger =
  (store: MiddlewareAPI) =>
  (next: Dispatch<AnyAction>) =>
  (action: AnyAction) => {
    // eslint-disable-next-line no-console
    console.log(action.type, action.payload);

    next(action);

    // eslint-disable-next-line no-console
    console.log(store.getState());
  };

export default logger;
