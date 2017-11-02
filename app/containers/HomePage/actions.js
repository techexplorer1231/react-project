/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_POKEMONS,
  LOAD_POKEMONS_SUCCESS,
  LOAD_POKEMONS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadPokemons(data) {
  console.log(data);
  return {
    type: LOAD_POKEMONS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {Object} pokemons pokemons object
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the pokemons
 */
export function pokemonsLoaded({ count, previous, next, results }) {
  return {
    type: LOAD_POKEMONS_SUCCESS,
    count,
    previous,
    next,
    results,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function pokemonLoadingError(error) {
  return {
    type: LOAD_POKEMONS_ERROR,
    error,
  };
}
