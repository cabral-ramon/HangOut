import * as GroupAPIUtil from "../util/group_api_util";

export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const REMOVE_GROUP = "REMOVE_GROUP";

const receiveGroup = (group) => {
  return {
    type: RECEIVE_GROUP,
    group: group
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
  });
};
