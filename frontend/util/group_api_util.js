export const fetchGroups = () => {
  $.ajax({
    url: "api/group",
    method: "get"
  });
};

export const fetchGroup = (groupId) => {
  $.ajax({
    url: `api/group/${groupId}`,
    method: "get"
  });
};

export const updateGroup = (group) => {
  $.ajax({
    url: `api/group/${group.id}`,
    method: "patch",
    data: { group }
  });
};

export const deleteGroup = (groupId) => {
  $.ajax({
    url: `api/group/${groupId}`,
    method: "delete"
  });
};

export const createGroup = (group) => {
  $.ajax({
    url: "api/group",
    method: "post"
  });
};
