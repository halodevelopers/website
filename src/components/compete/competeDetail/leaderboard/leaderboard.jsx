import React from 'react';
import LeaderBoardCard from './leaderboardCard';

function LeaderBoard() {
    return ( 
        <div>
            <div className="heading">
                <h3>Competition Leaderboard</h3>
            </div>
            <div className="body">
                <p>Unless stated otherwise in the Info Page, this leaderboard reflects scores based on only a</p>
                <p>portion of the total test set until the competition closes. See competition Info for more</p>
                <p>information.</p>
            </div>
            <LeaderBoardCard/>
        </div>
     );
}

export default LeaderBoard;