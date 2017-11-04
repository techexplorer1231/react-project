/**
 *
 * DetailPage
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class DetailPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>DetailPage</title>
          <meta name="description" content="Description of DetailPage" />
        </Helmet>
        <div className="row justify-content-md-center">
          <div className="col-1">
            <img
              src="https://raw.githubusercontent.com/dreamweaver1231/react-project/master/app/images/Pokemon/8.png"
              alt="pokemon"
              className="img-thumbnail"
            />
            <img
              src="https://raw.githubusercontent.com/dreamweaver1231/react-project/master/app/images/Pokemon/8.png"
              alt="pokemon"
              className="img-thumbnail"
            />
            <img
              src="https://raw.githubusercontent.com/dreamweaver1231/react-project/master/app/images/Pokemon/8.png"
              alt="pokemon"
              className="img-thumbnail"
            />
          </div>
          <div className="col-4">
            <img
              src="https://raw.githubusercontent.com/dreamweaver1231/react-project/master/app/images/Pokemon/8.png"
              alt="pokemon"
              className="img-thumbnail"
            />
            <br />
            <div className="d-flex justify-content-center">
              <div className="p-2">
                <button
                  type="button"
                  className="btn btn-success"
                  title="Tooltip on top"
                >
                  <i className="fa fa-plus-square-o" aria-hidden="true" />
                </button>
              </div>
              <div className="p-2">
                <button
                  type="button"
                  className="btn btn-success"
                  title="Tooltip on top"
                >
                  <i className="fa fa-heart-o" aria-hidden="true" />
                </button>
              </div>
              <div className="p-2">
                <button
                  type="button"
                  className="btn btn-success"
                  title="Tooltip on top"
                >
                  <i className="fa fa-superpowers" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-3">Fluid jumbotron</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  quas facere velit earum pariatur eius impedit officiis
                  accusantium magnam nam eligendi magni molestias voluptatum
                  beatae aspernatur laudantium, quae ratione ad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  detailpage: makeSelectDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'detailPage', reducer });
const withSaga = injectSaga({ key: 'detailPage', saga });

export default compose(withReducer, withSaga, withConnect)(DetailPage);
