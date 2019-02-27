import T from 'prop-types';
import React from 'react';

import Spinner from 'components/Spinner';

import Chacrater from './Character';

const View = props => (
  <React.Fragment>
    <div className="container">
      <h1>List of heroes you will love</h1>
      {props.characters.map((item, i) => <Chacrater {...item} key={i} />)}
    </div>
    {props.loading && <Spinner />}
  </React.Fragment>
);

View.propTypes = {
  characters: T.arrayOf(T.object).isRequired,
  loading: T.bool.isRequired,
};

View.defaultProps = {
  characters: [],
};

export default View;
