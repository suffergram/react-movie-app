import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from './reducer/reducer';
import { logger } from '../middleware/logger';

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
