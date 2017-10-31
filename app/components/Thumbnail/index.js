import React from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Img/Loadable';

function Thumbnail({ name, url }) {
  return (
    <div className="col p-2">
      <div className="card">
        <Img
          className="card-img-top"
          src="https://raw.githubusercontent.com/dreamweaver1231/react-project/master/app/images/Pokemon/3.png"
          alt="Card cap"
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <a href={url} className="btn btn-success">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

Thumbnail.propTypes = {
  name: PropTypes.any,
  url: PropTypes.any,
};

export default Thumbnail;
