export const createMembership = (membership) => (
  $.ajax({
    url: `/api/groups/${membership.group_id}/memberships`,
    method: "post",
    data: { membership }
  })
);

export const removeMembership = (groupId) => (
  $.ajax({
    url: `/api/groups/${groupId}/memberships/`,
    method: "delete",
    data: { groupId }
  })
);
