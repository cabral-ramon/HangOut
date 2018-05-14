import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_GROUP = "RECEIVE_GROUP";

const receiveGroup = ({group, members, events, rsvps}) => {
  return {
    type: RECEIVE_GROUP,
    group: group,
    members: members,
    events: events,
    rsvps
  };
};

export const createComment = (commentParams) => (dispatch) => {
  return CommentAPIUtil.createComment(commentParams).then( (group) => {
    return dispatch(receiveGroup(group));
  });
};

export const deleteComment = (commentId) => (dispatch) => {
  return CommentAPIUtil.deleteComment(commentId).then( (group) => {
    return dispatch(receiveGroup(group));
  });
};
