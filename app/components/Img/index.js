/**
*
* Img
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function Img({ className, src, alt, ...props }) {
  return <img className={className} src={src} alt={alt} {...props} />;
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  props: PropTypes.any,
};

export default Img;
