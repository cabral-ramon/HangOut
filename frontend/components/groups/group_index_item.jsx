import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({group}) => {

    return (
      <Link
        to={`/groups/${group.id}`}
        style={{
          textDecoration: 'none'}}>
        <li className="group-container">
          <img src={group.image}></img>
          <h4
            className="group-name">
            {group.name.length > 30 ?
              group.name.slice(0,30) + '...' : group.name}
            </h4>
            <p className="group-location">{group.location}</p>
          </li>
      </Link>
    );
  };

export default GroupIndexItem;
