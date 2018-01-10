import * as EventAPIUtil from "../util/event_api_util";

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

const receiveEvent = (event) => {
  return {
    type: RECEIVE_EVENT,
    event: event,
    rsvps: event.attendees
  };
};

const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events: events
  };
};

export const fetchEvents = () => (dispatch) => {
  return EventAPIUtil.fetchEvents().then( (events) => {
    dispatch(receiveEvents(events));
  });
};

export const fetchEvent = (eventParams) => (dispatch) => {
  return EventAPIUtil.fetchEvent(eventParams).then( (event) => {
    dispatch(receiveEvent(event));
  });
};

export const createEvent = ({ groupId, event}) => (dispatch) => {
  return EventAPIUtil.createEvent({groupId, event}).then( (event) => {
    dispatch(receiveEvent(event));
    return event;
  });
};
