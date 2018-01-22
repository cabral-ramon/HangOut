import * as EventAPIUtil from "../util/event_api_util";
import * as RsvpAPIUtil from "../util/rsvp_api_util";
import { receiveGroup } from "./group_actions";

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

const receiveEvent = ({event, rsvps, groups, members}) => {
  return {
    type: RECEIVE_EVENT,
    event,
    rsvps,
    groups,
    members,
  };
};

const receiveEvents = ({events, groups}) => {
  return {
    type: RECEIVE_EVENTS,
    events,
    groups
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

// export const createEvent = ({ groupId, event}) => (dispatch) => {
//   return EventAPIUtil.createEvent({groupId, event}).then( (response) => {
//     dispatch(receiveGroup( response));
//     return event;
//   });
// };

export const createRsvp = (rsvpParams) => (dispatch) => {
  return RsvpAPIUtil.createRsvp(rsvpParams).then( (event) => {
    return dispatch(receiveEvent(event));
  });
};

export const deleteRsvp = (eventId) => (dispatch) => {
  return RsvpAPIUtil.deleteRsvp(eventId).then( (event) => {
    return dispatch(receiveEvent(event));
  });
};
