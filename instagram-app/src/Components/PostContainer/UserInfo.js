import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const UserInfo = props => {
    return (
        <div className="post--user-info">
        	<div className="user-info--thumbnail">
            	<img src={props.thumbnailUrl} alt="" />
            </div>
            <div className="user-info-name">
                <h2>{props.username}</h2>	            
            </div>
            </div>
          
    )
}

export default UserInfo;