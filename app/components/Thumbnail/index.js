import React from 'react';

function Thumbnail() {
  return (
    <div className="col-sm-4 p-2">
      <div className="card">
        <img
          className="card-img-top"
          src="../../images/Pokemon/1.png"
          alt="Card cap"
        />
        <div className="card-body">
          <h4 className="card-title">Special title treatment</h4>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
