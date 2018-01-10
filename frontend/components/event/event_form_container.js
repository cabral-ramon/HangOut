import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => {
  return {
    groupId: ownProps.groupId
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      createEvent: (event) => dispatch(createEvent(event))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
