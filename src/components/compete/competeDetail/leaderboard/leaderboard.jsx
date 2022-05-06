import React from 'react';
import LeaderBoardCard from './leaderboardCard';

function LeaderBoard() {
    return (
        <div>
            <div className="heading">
                <h5 style={{ fontSize: "16px" }}>Competition Leaderboard</h5>
            </div>
            <div className="body" style={{width:"50%"}}>
                <p style={{ fontSize: "14px", }}>
                    Unless stated otherwise in the Info Page, this leaderboard reflects scores based on only a
                    portion of the total test set until the competition closes. See competition Info for more
                    information.
                </p>
            </div>
            <div className='mt-5'>
                <LeaderBoardCard />
            </div>
        </div >
    );
}

export default LeaderBoard;