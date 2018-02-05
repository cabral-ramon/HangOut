import * as CommentAPIUtil from "../util/comment_api_util";

export const createComment = (commentParams) => (dispatch) => {
  return CommentAPIUtil.createComment(commentParams).then( (group) => {
    return dispatch(receiveGroup(group));
  });
};
