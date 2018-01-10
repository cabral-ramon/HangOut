import { connect } from 'react-redux';
import { fetchEvent} from '../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  let eventId = parseInt(ownProps.match.params.eventId);
  return {
    event: state.events[eventId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
