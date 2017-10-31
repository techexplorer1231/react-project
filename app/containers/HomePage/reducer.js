/*
 *
 * HomePageReducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_POKEMONS_SUCCESS,
  LOAD_POKEMONS,
  LOAD_POKEMONS_ERROR,
} from './constants';

// The initial state of the Home
const initialState = fromJS({
  loading: false,
  error: false,
  pokemonData: {
    count: false,
    previous: false,
    next: false,
    pokemons: false,
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POKEMONS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['pokemonData', 'pokemons'], false);
    case LOAD_POKEMONS_SUCCESS:
      return state
        .setIn(['pokemonData', 'pokemons'], action.results)
        .setIn(['pokemonData', 'count'], action.count)
        .setIn(['pokemonData', 'previous'], action.previous)
        .setIn(['pokemonData', 'next'], action.next)
        .set('loading', false);
    case LOAD_POKEMONS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
