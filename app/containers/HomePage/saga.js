/**
 * Gets the repositories of the user from PokeAPI
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_POKEMONS } from 'containers/HomePage/constants';
import {
  pokemonsLoaded,
  pokemonLoadingError,
} from 'containers/HomePage/actions';

import request from 'utils/request';

/**
 * Github pokemons request/response handler
 */
export function* getPokemons() {
  // Select username from store
  const requestURL = 'https://pokeapi.co/api/v2/pokemon/';

  try {
    // Call our request helper (see 'utils/request')
    const pokemons = yield call(request, requestURL);
    yield put(pokemonsLoaded(pokemons));
  } catch (err) {
    yield put(pokemonLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getPokemons when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_POKEMONS, getPokemons);
}
