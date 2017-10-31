/**
*
* PokemonList
*
*/

import React from 'react';
import Thumbnail from 'components/Thumbnail/Loadable';
// import styled from 'styled-components';

function PokemonList() {
  return (
    <div className="row">
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </div>
  );
}

PokemonList.propTypes = {};

export default PokemonList;
