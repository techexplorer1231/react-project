/**
*
* Pagination
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function Pager({ onLoadDataPrevious, onLoadDataNext, previous, next }) {
  /* eslint-disable no-unneeded-ternary */
  const isPreviousDisabled = previous === null ? true : false;
  const isNextDisabled = next == null ? true : false;
  /* eslint-enable no-unneeded-ternary */
  return (
    <div className="clearfix">
      <button
        disabled={isPreviousDisabled}
        type="button"
        onClick={() => onLoadDataPrevious(previous)}
        className="btn btn-primary float-left"
      >
        &#x3c;&#x3c;
      </button>
      <button
        disabled={isNextDisabled}
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
  previous: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  next: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Pager;
