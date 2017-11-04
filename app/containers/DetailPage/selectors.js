import { createSelector } from 'reselect';

/**
 * Direct selector to the detailPage state domain
 */
const selectDetailPageDomain = (state) => state.get('detailPage');

/**
 * Other specific selectors
 */

/**
 * Default selector used by DetailPage
 */

const makeSelectDetailPage = () =>
  createSelector(selectDetailPageDomain, (substate) => substate.toJS());

export default makeSelectDetailPage;
export { selectDetailPageDomain };
