import { connect } from 'react-redux';
import { createEvent } from '../../actions/group_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => {
  return {
    groupId: ownProps.groupId,
    errors: state.errors.event
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      createEvent: (event) => dispatch(createEvent(event))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
