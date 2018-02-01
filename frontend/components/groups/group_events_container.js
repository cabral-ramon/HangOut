import { connect } from 'react-redux';
import GroupEvents from './group_events';

const mapStateToProps = (state, ownProps) => {
  return {
    events: Object.values(state.events) || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupEvents);
