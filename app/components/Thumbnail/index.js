import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Img from 'components/Img/Loadable';

function Thumbnail({ name, index }) {
  const imgUrl = `https://raw.githubusercontent.com/dreamweaver1231/react-project/master/app/images/Pokemon/${index}.png`;
  return (
    <div className="col p-2">
      <div className="card">
        <Img className="card-img-top" src={imgUrl} alt="Card cap" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <Link to={`/${index}`} className="btn btn-success">
            More Information
          </Link>
        </div>
      </div>
    </div>
  );
}

Thumbnail.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};

export default Thumbnail;
