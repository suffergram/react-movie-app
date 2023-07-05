import { createStore, applyMiddleware, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import reducer from './reducer';
import RootState from '../Types/RootState';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export const useAppDispatch: () => AppThunkDispatch = useDispatch;

export default store;
