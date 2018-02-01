import { connect } from 'react-redux';
import GroupAbout from './group_About';

const mapStateToProps = (state, ownProps) => {
  const group = state.groups[parseInt(ownProps.match.params.id)];
  return {
    group: group
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupAbout);
