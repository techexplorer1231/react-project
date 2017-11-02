import React from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Img/Loadable';

function Thumbnail({ name, url }) {
  const data = url.split('/');
  const index = data[data.length - 2];
  const imgUrl = `https://raw.githubusercontent.com/dreamweaver1231/react-project/master/app/images/Pokemon/${index}.png`;

  return (
    <div className="col p-2">
      <div className="card">
        <Img className="card-img-top" src={imgUrl} alt="Card cap" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
        </div>
      </div>
    </div>
  );
}

Thumbnail.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Thumbnail;
