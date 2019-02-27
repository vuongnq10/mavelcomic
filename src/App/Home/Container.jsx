import T from 'prop-types';
import React from 'react';

import View from './View';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
    this.state = {
      loading: true,
    };
  }
  componentWillMount() {
    this.props.load();
    this.setState({
      loading: true,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
  }

  componentWillReceiveProps() {
    this.setState({
      loading: false,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight
      && !this.state.loading) {
      this.props.load();
      this.setState({
        loading: true,
      });
    }
  }

  render() {
    return (
      <View
        {...this.state}
        characters={this.props.characters}
      />
    );
  }
}

Container.propTypes = {
  load: T.func.isRequired,
  characters: T.arrayOf(T.object).isRequired,
};

View.defaultProps = {
  characters: [],
};

export default Container;
