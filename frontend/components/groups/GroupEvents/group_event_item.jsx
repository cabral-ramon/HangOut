import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const GroupEventItem = ({event}) => (
  <Paper style={{marginBottom: '20px'}}>
    <li key={event.id}
      className="group-event-li">
      <div className="event-list-container">
        <p className="event-list-date">{event.date}</p>
        <Link to={`/events/${event.id}`}
          className="event-list-name">
          <Typography variant='title'>
            {event.name}
          </Typography>
        </Link>
        <article className="event-list-desc">
          <Typography variant='body1'>
            {event.description}
          </Typography>
        </article>
      </div>
    </li>
  </Paper>
);

export default GroupEventItem;
