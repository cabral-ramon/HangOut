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

export const createRsvp = (rsvpParams) => (dispatch) => {
  return RsvpAPIUtil.createRsvp(rsvpParams).then( (event) => {
    return dispatch(receiveEvent(event));
  });
};

export const deleteRsvp = (eventId) => (dispatch) => {
  return RsvpAPIUtil.deleteRsvp(eventId).then( (response) => {
    return dispatch(removeRsvp(response));
  });
};
