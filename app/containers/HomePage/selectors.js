import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHome = (state) => state.get('homePage');

const selectRoute = (state) => state.get('route');

const makeSelectLoading = () =>
  createSelector(selectHome, (globalState) => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectHome, (globalState) => globalState.get('error'));

const makeSelectPokemons = () =>
  createSelector(selectHome, (globalState) =>
    globalState.getIn(['pokemonData', 'pokemons'])
  );

const makeSelectCount = () =>
  createSelector(selectHome, (globalState) =>
    globalState.getIn(['pokemonData', 'count'])
  );

const makeSelectPrevious = () =>
  createSelector(selectHome, (globalState) =>
    globalState.getIn(['pokemonData', 'previous'])
  );

const makeSelectNext = () =>
  createSelector(selectHome, (globalState) =>
    globalState.getIn(['pokemonData', 'next'])
  );

const makeSelectHomePage = () =>
  createSelector(selectHome, (substate) => substate.toJS());

export {
  selectHome,
  selectRoute,
  makeSelectHomePage,
  makeSelectLoading,
  makeSelectError,
  makeSelectPokemons,
  makeSelectCount,
  makeSelectPrevious,
  makeSelectNext,
};
