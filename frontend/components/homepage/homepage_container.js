import { connect } from 'react-redux';
import Homepage from './homepage';
import { searchGroups } from '../../actions/group_actions';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchGroups: (query) => dispatch(searchGroups(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
