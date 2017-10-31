/**
*
* PokemonList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from 'components/Thumbnail/Loadable';
import LoadingIndicator from 'components/LoadingIndicator';
import List from 'components/List';
import ListItem from 'components/ListItem';

function PokemonList({ loading, error, pokemons }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (pokemons !== false) {
    return <List items={pokemons} component={Thumbnail} />;
  }

  return null;
}

PokemonList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  pokemons: PropTypes.any,
};

export default PokemonList;
