import React from 'react';
import styles from './css/community.module.css';
import clsx from 'clsx';
import CommunityUsers from './communityUsers';


function CommunityCard() {
    return (
<div>
<div className={clsx(styles.card_titles)}>
            <div className="row text-center">
                <div className="col-2">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>RANK</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>USER</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>POINTS</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>JOINED</h6>
                    </div>
                </div>
            </div>
            <CommunityUsers/>
        </div>

</div>
    );
}

export default CommunityCard;