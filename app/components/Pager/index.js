/**
*
* Pagination
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function Pager({ onLoadDataPrevious, onLoadDataNext, previous, next }) {
  return (
    <div className="clearfix">
      <button
        type="button"
        onClick={() => onLoadDataPrevious(previous)}
        className="btn btn-primary float-left"
      >
        &#x3c;&#x3c;
      </button>
      <button
        type="button"
        onClick={() => onLoadDataNext(next)}
        className="btn btn-primary float-right"
      >
        &#x3e;&#x3e;
      </button>
    </div>
  );
}

Pager.propTypes = {
  onLoadDataPrevious: PropTypes.func,
  onLoadDataNext: PropTypes.func,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // count: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  previous: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  next: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Pager;
