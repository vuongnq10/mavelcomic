import T from 'prop-types';
import React from 'react';
import { get } from 'action/comic';

import View from './View';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      comic: {},
    };
  }

  async componentWillMount() {
    const comic = await get(this.props.id);
    this.setState({ comic, loading: false });
  }

  render() {
    return (
      <View
        {...this.state}
      />
    );
  }
}

Index.propTypes = {
  id: T.string.isRequired,
};

export default Index;
