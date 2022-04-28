import React from 'react';
import avatar from './images/avatar.jpg';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import clsx from 'clsx';
import styles from './css/discussionCard.module.css';

function DiscussionCard() {
    return ( 
        <div className={clsx("p-3 mt-2", styles.card)}>
            <div className="row">
                <div className="col-auto">
                    <img style={{width:"80px", borderRadius:"50%"}} src={avatar} alt="" srcset="" />
                </div>
                <div className="col-6 mt-2">
                    <h6>Algorithms</h6>
                    <div>
                        <p>fedora <span>.in Data </span> <span> Turtle Rescue Forecast Challenge </span> <span> 9 days ago </span></p>
                    </div>
                </div>
                <div className="col">
                <span>
                    <p>
                    <VisibilityIcon/> 19
                    </p>
                </span>
                <span>
                    <p>
                    <MailOutlineIcon/> 13
                    </p>
                </span>
                </div>
                <div className="col">
                    <span>
                    <img style={{width:"20px", borderRadius:"50%"}} src={avatar} alt="" srcset="" />
                    <p>Last answer 7 days ago</p>
                    </span>
                </div>
            </div>
        </div>
     );
}

export default DiscussionCard;