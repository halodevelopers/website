import React from 'react';
import LeaderBoardUsers from './leaderboardUser';
import avator from './images/ebin.png';

function LeaderBoardCard() {
    return (
        <div>
            <div className="row text-center">
                <div className="col-auto">
                    <div className="heading">
                        <h5>RANK</h5>
                    </div>
                    <div>
                        <p>1</p>
                    </div>
                </div>
                <div className="col">
                    <h5>USER</h5>
                    <div>
                        <img src={avator} style={{ width: "40px", borderRadius: "50%" }} alt="" />
                        <h6>Ebiendele</h6>
                        <p>Federal University</p>
                    </div>
                </div>
                <div className="col-auto">
                    <h5>SCORE</h5>
                    <div>
                        <h4>1.47000</h4>
                    </div>
                </div>
                <div className="col-auto">
                    <h5>LAST SUBMISSION</h5>
                    <div>
                        <h4>18 hours Ago</h4>
                    </div>
                </div>
                <div className="col-auto">
                    <h5>TIME LEFT</h5>
                    <div>
                        3 hours
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaderBoardCard;