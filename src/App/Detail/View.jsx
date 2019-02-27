import T from 'prop-types';
import React from 'react';

import Spinner from 'components/Spinner';

const View = props => (
  !props.loading ? <div className="container">
    {props.hero.name}
  </div> : <Spinner />
);

View.propTypes = {
  loading: T.bool.isRequired,
  hero: T.shape({
    name: T.string.isRequired,
  }).isRequired,
};

export default View;
