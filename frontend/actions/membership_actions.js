import * as MembershipAPIUtil from "../util/membership_api_util";
import { RECEIVE_GROUP } from "./group_actions";

export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";


const receiveMembership = (group) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    group:  group
  };
};

const removeMembership = (membershipId) => {
  return {
    type: REMOVE_MEMBERSHIP,
    membershipId: membershipId
  };
};

export const createMembership = (membership) => (dispatch) => {
  return MembershipAPIUtil.createMembership(membership).then( (group) => {
    return dispatch(receiveGroup(group));
  });
};

export const deleteMembership = (membershipId) => (dispatch) => {
  return MembershipAPIUtil.deleteMembership(membershipId).then( (membershipId) => {
    return dispatch(removeMembership(membershipId));
  });
};
