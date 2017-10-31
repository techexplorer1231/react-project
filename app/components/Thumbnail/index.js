import React from 'react';
import Img from 'components/Img/Loadable';

function Thumbnail() {
  return (
    <div className="col p-2">
      <div className="card">
        <Img
          className="card-img-top"
          src="https://raw.githubusercontent.com/dreamweaver1231/react-project/master/app/images/Pokemon/3.png"
          alt="Card cap"
        />
        <div className="card-body">
          <h4 className="card-title">Bulbasaur</h4>
          <a href="/" className="btn btn-success">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
