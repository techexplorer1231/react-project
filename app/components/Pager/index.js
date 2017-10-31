/**
*
* Pagination
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function Pager({ error, count, previous, next }) {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">{error}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">{count}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">{previous}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">{next}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>
  );
}

Pager.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  previous: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  next: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Pager;
