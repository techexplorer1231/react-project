import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Img from 'components/Img/Loadable';
import { getIndex, capitalize } from 'utils/util';

function Thumbnail({ name, url }) {
  const imgUrl = getIndex(url);
  const capitalName = capitalize(name);

  return (
    <Link to="/detail" className="col p-2">
      <div className="card">
        <div className="card-header">{capitalName}</div>
        <Img className="card-img-top" src={imgUrl} alt="Card cap" />
      </div>
    </Link>
  );
}

Thumbnail.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Thumbnail;
