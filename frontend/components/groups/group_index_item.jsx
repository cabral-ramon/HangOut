import React from 'react';
import { Link } from 'react-router-dom';

const GroupIndexItem = ({group}) => {

    return (
      <Link
        to={`/groups/${group.id}`}
        style={{
          textDecoration: 'none'}}
          className='group-link'>
        <li className="group-container">
          <img className='group-image' src={group.image}></img>

            <div className='gradient'>
                <h4
                  className="group-name">
                  {group.name.length > 30 ?
                    group.name.slice(0,30) + '...' : group.name}
                  </h4>
                  <p className="group-location">{group.location}</p>
            </div>
          </li>
      </Link>
    );
  };

export default GroupIndexItem;
