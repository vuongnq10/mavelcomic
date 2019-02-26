import T from 'prop-types';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const App = props => (<div>
  {props.children}
</div>);

App.propTypes = {
  children: T.node.isRequired,
};

export default App;
