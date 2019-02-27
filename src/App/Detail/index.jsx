import { connect } from 'react-redux';

import { get } from 'action/home';
import Container from './Container';

const mapStateToProps = state => ({
  hero: state.home.hero,
});

const mapDispatchToProps = dispatch => ({
  get: id => dispatch(get(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
