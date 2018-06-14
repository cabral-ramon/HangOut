import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const GroupIndexItem = ({group}) => {

    return (
      <Link
        to={`/groups/${group.id}`}
        style={{
          textDecoration: 'none'}}
          className='group-link'>
        <li className="group-container">
          <Card
          >
            <CardMedia style={{height: 0, paddingTop: '56.25%'}}
              image={group.image}
              title={group.name}
              />
            <CardContent style={{minHeight: '85px'}}>
              <Typography gutterBottom variant="title" >
                {group.name.length > 30 ?
                  group.name.slice(0,30) + '...' : group.name}
                </Typography>
                <Typography gutterBottom variant="subheading" >
                  {group.location}
                </Typography>
              </CardContent>
            </Card>
          </li>
      </Link>
    );
  };

export default GroupIndexItem;
