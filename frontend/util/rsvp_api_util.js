export const createRsvp = (rsvp) => (
  $.ajax({
    url: `/api/rsvps/`,
    method: "post",
    data: { rsvp }
  })
);

export const deleteRsvp = (eventId) => (
  $.ajax({
    url: `/api/events/:event_id/rsvps`,
    method: "delete",
    data: { eventId }
  })
);
