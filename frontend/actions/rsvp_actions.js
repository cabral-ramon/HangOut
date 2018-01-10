import * as RsvpAPIUtil from "../util/rsvp_api_util";

export const RECEIVE_RSVP = "RECEIVE_RSVP";
export const REMOVE_RSVP = "REMOVE_RSVP";


const receiveRsvp = (event) => {
  return {
    type: RECEIVE_RSVP,
    event:  event
  };
};

const removeRsvp = (rsvpId) => {
  return {
    type: REMOVE_RSVP,
    rsvpId: rsvpId
  };
};

export const createRsvp = ({group_id, rsvp}) => (dispatch) => {
  return RsvpAPIUtil.createRsvp({group_id, rsvp}).then( (event) => {
    return dispatch(receiveEvent(event));
  });
};

export const deleteRsvp = ({ groupId, eventId})) => (dispatch) => {
  return RsvpAPIUtil.deleteRsvp{ groupId, eventId}).then( ({ groupId, eventId})) => {
    return dispatch(removeRsvp({ groupId, eventId})));
  });
};
