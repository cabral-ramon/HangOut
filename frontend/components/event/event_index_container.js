import { connect } from 'react-redux';
import { fetchEvents, fetchUserEvents } from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = (state) => {
  return {
    events: state.events,
    groups: state.groups,
    userId: state.session.currentUser ?
      state.session.currentUser.id :
      null
  };
};

const mapDispatchToProps = (dispatch, { homepage }) => {
  return {
    fetchEvents: homepage ?
      (userId) => dispatch(fetchUserEvents(userId)) :
      () => dispatch(fetchEvents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
