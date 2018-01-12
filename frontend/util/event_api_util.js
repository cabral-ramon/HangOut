export const fetchEvents = () => (
  $.ajax({
    url: "/api/events",
    method: "get"
  })
);

export const fetchEvent = (eventId) => {
  return $.ajax({
    url: `/api/events/${eventId}`,
    method: "get"
  })
}

export const createEvent = ({ groupId, event}) => (
  $.ajax({
    url: `/api/groups/${groupId}/events`,
    method: "post",
    data: { event }
  })
);
