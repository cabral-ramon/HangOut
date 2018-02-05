import { connect } from 'react-redux';
import GroupAbout from './group_about';

const mapStateToProps = (state, ownProps) => {
  const group = state.groups[parseInt(ownProps.match.params.id)];
  return {
    group: group,
    members: Object.values(state.members) || [],
    events: Object.values(state.events) || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupAbout);
