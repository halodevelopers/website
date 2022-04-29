import React from 'react';
import avator from './images/ebin.png';
import styles from './css/leaderboard.module.css';
import clsx from 'clsx';

function LeaderBoardUsers() {
    return (
        <div className={clsx(styles.card_user)}>
            <div className="row text-center">
                <div className="col-auto">
                    <div>
                        <p className={clsx(styles.leaderboard_body)}>1</p>
                    </div>
                </div>
                <div className="col">
                    <div className={clsx(styles.leaderboard_inline)}>
                        <div className={clsx(styles.leaderboard_left)}>
                            <img src={avator} style={{ width: "60px", borderRadius: "50%", marginRight:"10px" }} alt="" />
                        </div>
                        <div className={clsx(styles.leaderboard_user)}>
                            <h6 className={clsx(styles.leaderboard_user_title)}>Ebiendele</h6>
                            <p className={clsx(styles.leaderboard_body)}>Federal University</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p className={clsx(styles.leaderboard_user_title)}>1.47000</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p className={clsx(styles.leaderboard_body)}>18 hours Ago</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p className={clsx(styles.leaderboard_body)}>8</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p className={clsx(styles.leaderboard_body)}>
                            3 hours
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaderBoardUsers;