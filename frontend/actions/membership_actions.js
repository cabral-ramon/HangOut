import * as MemberhsipAPIUtil from "../util/membership_api_util";

export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";

const receiveMembership = (membership) => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membership: membership
  };
};

const removeMembership = (membershipId) => {
  return {
    type: REMOVE_MEMBERSHIP,
    membershipId: membershipId
  };
};

export const createMembership = (membership) => (dispatch) => {
  return MembershipAPIUtil.createMembership(membership).then( (membership) => {
    return dispatch(receiveMembership(membership));
  });
};

export const deleteMembership = (membershipId) => (dispatch) => {
  return MembershipAPIUtil.deleteMembership(membershipId).then( (membershipId) => {
    return dispatch(removeMembership(membershipId));
  });
};
