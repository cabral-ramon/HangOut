import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import { deleteRsvp, createRsvp } from '../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  let eventId = parseInt(ownProps.match.params.eventId);
    let groupId = parseInt(ownProps.match.params.groupId);
  return {
    event: state.events[eventId],
    eventId: eventId,
    groupId: groupId,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    deleteRsvp: (eventId) => dispatch(deleteRsvp(eventId)),
    createRsvp: (rsvpParams) => dispatch(createRsvp(rsvpParams))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
