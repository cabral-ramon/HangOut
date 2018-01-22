export const fetchGroups = () => (
  $.ajax({
    url: "/api/groups",
    method: "get"
  })
);

export const fetchGroup = (groupId) => (
  $.ajax({
    url: `/api/groups/${groupId}`,
    method: "get"
  })
);

export const updateGroup = (group) => (
  $.ajax({
    url: `/api/groups/${group.id}`,
    method: "patch",
    data: { group }
  })
);

export const deleteGroup = (groupId) => (
  $.ajax({
    url: `/api/groups/${groupId}`,
    method: "delete"
  })
);

export const createGroup = (group) => (
  $.ajax({
    url: "/api/groups",
    method: "post",
    contentType: false,
    processData: false,
    data: group
  })
);

export const fetchGroupMembers = (groupId) => (
  $.ajax({
    url: `/api/users`,
    method: "get",
    data: { groupId }
  })
);

export const searchGroups = (query) => (
  $.ajax({
    url: '/api/groups/search',
    method: "get",
    data: query
  })
);
