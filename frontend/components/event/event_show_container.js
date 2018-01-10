import { connect } from 'react-redux';
import { fetchEvent} from '../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  let eventId = parseInt(ownProps.match.params.eventId);
    let groupId = parseInt(ownProps.match.params.groupId);
  return {
    event: state.events[eventId],
    eventId: eventId,
    groupId: groupId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
