import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import { deleteRsvp, createRsvp } from '../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  let eventId = parseInt(ownProps.match.params.eventId);
  const event = state.events[eventId] || {rsvps: []};
  let eventMembers = event.rsvps.map( rsvp => state.members[rsvp.user_id] || {} );
  let organizer = eventMembers.filter( (member) => member.id === event.organizer_id)[0] || {};
  
  return {
    event,
    eventId,
    currentUser: state.session.currentUser,
    rsvps: event.rsvps,
    group: state.groups[event.group_id] || {},
    eventMembers,
    organizer
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
