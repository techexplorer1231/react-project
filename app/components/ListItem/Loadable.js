/**
 *
 * Asynchronously loads the component for PokemonList
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
