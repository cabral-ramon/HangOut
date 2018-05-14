export const createComment = ({groupId, comment}) => (
  $.ajax({
    url: `/api/groups/${groupId}/comments`,
    method: "post",
    data: { comment }
  })
);

export const deleteComment = (commentId) => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: "delete"
  })
);
