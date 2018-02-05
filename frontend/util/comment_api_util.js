export const createComment = ({groupId, comment}) => (
  $.ajax({
    url: `/api/groups/${groupId}/comments`,
    method: "post",
    data: { comment }
  })
);
