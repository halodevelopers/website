import React from 'react';
import avator from './images/ebin.png';
import styles from './css/leaderboard.module.css';
import clsx from 'clsx';
import LeaderBoardUsers from './leaderboardUser';

function LeaderBoardCard() {
    return (
<div>
<div className={clsx(styles.card_titles)}>
            <div className="row text-center">
                <div className="col-auto">
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
                        <h6 className={clsx(styles.card_heading)}>SCORE</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>LAST SUBMISSION</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>#SUBMITTED</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>TIME LEFT</h6>

                    </div>
                </div>
            </div>
        </div>
        <LeaderBoardUsers/>
</div>
    );
}

export default LeaderBoardCard;