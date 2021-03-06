import * as GroupAPIUtil from "../util/group_api_util";
import * as MembershipAPIUtil from "../util/membership_api_util";
import * as EventAPIUtil from "../util/event_api_util";
import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const REMOVE_GROUP = "REMOVE_GROUP";
export const RECEIVE_GROUP_ERRORS = "RECEIVE_GROUP_ERRORS";
export const RECEIVE_MEMBERS = "RECEIVE_MEMBERS";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";

const receiveEventErrors = (errors) => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors: errors.responseJSON
  };
};

const receiveGroup = ({group, members, events, rsvps}) => {
  return {
    type: RECEIVE_GROUP,
    group: group,
    members: members,
    events: events,
    rsvps
  };
};

const receiveGroups = (groups) => {
  return {
    type: RECEIVE_GROUPS,
    groups: groups
  };
};

const removeGroup = (groupId) => {
  return {
    type: REMOVE_GROUP,
    groupId: groupId
  };
};

const receiveGroupErrors = (errors) => {
  return {
    type: RECEIVE_GROUP_ERRORS,
    errors: errors.responseJSON
  };
};

const receiveMembers = (members) => {
  return {
    type: RECEIVE_MEMBERS,
    members: members
  };
};



export const fetchGroup = (group) => (dispatch) => {
  return GroupAPIUtil.fetchGroup(group).then( (response) => {
    dispatch(receiveGroup(response));
  });
};

export const fetchGroups = () => (dispatch) => {
  return GroupAPIUtil.fetchGroups().then( (groups) => {
    dispatch(receiveGroups(groups));
  });
};

export const fetchUsersGroups = (userId) => (dispatch) => {
  return GroupAPIUtil.fetchUsersGroups(userId).then( (groups) => {
    dispatch(receiveGroups(groups));
  });
};

export const updateGroup = (group) => (dispatch) => {
  return GroupAPIUtil.updateGroup(group).then( (group) => {
    dispatch(receiveGroup(group));
  });
};

export const deleteGroup = (groupId) => (dispatch) => {
  return GroupAPIUtil.removeGroup(groupId).then( (groupId) => {
    dispatch(removeGroup(groupId));
  });
};

export const createGroup = (group) => (dispatch) => {
  return GroupAPIUtil.createGroup(group).then( (group) => {
     dispatch(receiveGroup(group));
     return group.group;
  }, (errors) => {
    return dispatch(receiveGroupErrors(errors));
  });
};

export const fetchGroupMembers = (groupId) => (dispatch) => {
  return GroupAPIUtil.fetchGroupMembers(groupId).then( (users) => {
    return dispatch(receiveMembers(users));
  });
};

export const createMembership = (membership) => (dispatch) => {
  return MembershipAPIUtil.createMembership(membership).then( (group) => {
    return dispatch(receiveGroup(group));
  });
};

export const removeMembership = (groupId) => (dispatch) => {
  return MembershipAPIUtil.removeMembership(groupId).then( (group) => {
    return dispatch(receiveGroup(group));
  });
};

export const createEvent = ({ groupId, event}) => (dispatch) => {
  return EventAPIUtil.createEvent({groupId, event}).then( (response) => {
    dispatch(receiveGroup(response));
    return event;
  }, (errors) => {
    dispatch(receiveEventErrors(errors));
  });
};

export const createComment = (commentParams) => (dispatch) => {
  return CommentAPIUtil.createComment(commentParams).then( (group) => {
    return dispatch(receiveGroup(group));
  });
};

export const searchGroups = (query) => (dispatch) => {
  return GroupAPIUtil.searchGroups(query).then( (groups) => {
    return dispatch(receiveGroups(groups));
  });
};
