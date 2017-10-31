/**
*
* Pagination
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function Pager({ onLoadData }) {
  return (
    <div className="clearfix">
      <button
        type="button"
        onClick={onLoadData}
        className="btn btn-primary float-left"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={onLoadData}
        className="btn btn-primary float-right"
      >
        Next
      </button>
    </div>
  );
}

Pager.propTypes = {
  onLoadData: PropTypes.func,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // count: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  // previous: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // next: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Pager;
