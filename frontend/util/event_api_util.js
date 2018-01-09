export const fetchEvents = () => (
  $.ajax({
    url: "/api/events",
    mathod: "get"
  })
);

export const fetchEvent = ({ eventId, groupId}) => (
  $.ajax({
    url: `/api/groups/${groupId}/events/${eventId}`,
    method: "get"
  })
);

export const createEvent = ({ groupId, event}) => (
  $.ajax({
    url: `/api/groups/${groupId}/events`,
    method: "post",
    data: { event }
  })
);
