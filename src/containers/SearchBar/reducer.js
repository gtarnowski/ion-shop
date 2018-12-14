import { fromJS } from 'immutable';
import { createReducer } from 'redux-act';
import { globalSearch } from './actions';

export const initialState = fromJS({
  globalSearch: '',
});

export const methods = {
  [globalSearch]: (state, payload) => state
    .set('globalSearch', payload),
};

export default createReducer(methods, initialState)
