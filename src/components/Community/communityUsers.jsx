import React from 'react';
import avator from './images/ebin.png';
import styles from './css/community.module.css';
import clsx from 'clsx';

function CommunityUsers() {
    return (
        <div className={clsx(styles.card_user)}>
            <div className="row text-center">
                <div className="col-2">
                    <div>
                        <p className={clsx(styles.leaderboard_body)}>1</p>
                    </div>
                </div>
                <div className="col">
                    <div className={clsx(styles.leaderboard_inline)}>
                        <div className={clsx(styles.leaderboard_left)}>
                            <img src={avator} style={{ width: "60px", borderRadius: "50%", marginRight:"10px" }} alt="" />
                        </div>
                        <div className={clsx(styles.community_left)}>
                            <h6 className={clsx(styles.leaderboard_user_title)}>Ebiendele</h6>
                            <p className={clsx(styles.leaderboard_body)}>Federal University</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p className={clsx(styles.leaderboard_user_title)}>47</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p className={clsx(styles.leaderboard_body)}>
                            3 Months Ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunityUsers;