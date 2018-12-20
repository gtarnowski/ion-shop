import { createSelector } from 'reselect';

const selectDialogHandlerDomain = state => state.dialogHandler;

const makeSelectType = () =>
  createSelector(
    selectDialogHandlerDomain,
    state => state.get('type'),
  );

export { makeSelectType };
