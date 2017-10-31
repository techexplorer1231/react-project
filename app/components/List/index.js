/**
*
* List
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, i) => (
      <ComponentToRender key={item.name} {...item} index={i + 1} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return <div className="row">{content}</div>;
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default List;
