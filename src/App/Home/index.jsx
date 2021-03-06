import { connect } from 'react-redux';

import { load } from 'action/home';
import Container from './Container';

const mapStateToProps = state => ({
  characters: state.home.characters,
});

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(load()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
