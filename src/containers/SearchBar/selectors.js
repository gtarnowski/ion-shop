import { createSelector } from 'reselect';

const selectSearchBarDomain = state => state.searchBar;
const makeSelectGlobalSearch = () => createSelector(
  selectSearchBarDomain,
  state => state.get('globalSearch')
);

export {
  makeSelectGlobalSearch,
}
