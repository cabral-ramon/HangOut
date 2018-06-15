import { connect } from 'react-redux';
import GroupAbout from './group_about';
import fetchGroup from './../../../actions/group_actions';

const mapStateToProps = (state, ownProps) => {
  const group = state.groups[parseInt(ownProps.match.params.id)];
  return {
    groupId: parseInt(ownProps.match.params.id),
    group,
    members: Object.values(state.members) || [],
    events: Object.values(state.events) || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupAbout);
