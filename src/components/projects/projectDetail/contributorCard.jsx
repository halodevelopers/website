import React from 'react';
import avator from './images/ebin.png';
import styles from './css/projectcards.module.css';
import clsx from 'clsx';

function ContributorCard() {
    return (
        <div className={clsx(styles.card_user)}>
            <div className="row text-center">
                <div className="col-1">
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
                        <p className={clsx(styles.leaderboard_user_title)}>ebinedele</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p className={clsx(styles.leaderboard_body)}>Model Deployment</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p className={clsx(styles.leaderboard_body)}>React js</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p className={clsx(styles.leaderboard_body)}>
                            I cant wait to contribute to this great project
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContributorCard;