export const createMembership = (membership) => (
  $.ajax({
    url: `/api/groups/${membership.group_id}/memberships`,
    method: "post",
    data: { membership }
  })
);

export const deleteMembership = (membershipId) => (
  $.ajax({
    url: `/api/memberships/${membershipId}`,
    method: "delete",
    data: { membershipId}
  })
);
