export const createRsvp = ({group_id, rsvp}) => (
  $.ajax({
    url: `/api/groups/${group_id}/events/${rsvp.event_id}/rsvps`,
    method: "post",
    data: { rsvp }
  })
);

export const removeRsvp = ({ groupId, eventId}) => (
  $.ajax({
    url: `/api/groups/${groupId}/rsvps`,
    method: "delete",
    data: { eventId }
  })
);
