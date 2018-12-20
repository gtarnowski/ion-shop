import { fromJS } from 'immutable';
import { createReducer } from 'redux-act';
import { dialogHandlerTypeSet, dialogHandlerClose } from './actions';

export const initialState = fromJS({
  type: null,
});

export const methods = {
  [dialogHandlerTypeSet]: (state, payload) => state.set('type', payload),
  [dialogHandlerClose]: state => state.set('type', null),
};

export default createReducer(methods, initialState);
