import T from 'prop-types';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from 'App/Header';

const App = props => (<div>
  <Header />
  {props.children}
</div>);

App.propTypes = {
  children: T.node.isRequired,
};

export default App;
