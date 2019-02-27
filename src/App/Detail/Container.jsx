import T from 'prop-types';
import React from 'react';

import View from './View';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.get(this.props.params.id);
  }

  componentWillReceiveProps() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <View
        {...this.state}
        hero={this.props.hero}
      />
    );
  }
}

Container.propTypes = {
  params: T.shape({
    id: T.string.isRequired,
  }),
  get: T.func.isRequired,
  hero: T.shape({}),
};

View.defaultProps = {
  hero: {},
};

export default Container;
