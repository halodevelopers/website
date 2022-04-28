import React from 'react';
import avator from './images/ebin.png';

function LeaderBoardUsers() {
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <h6>1</h6>
                </div>
                <div className="col-4">
                    <img src={avator} style = {{width:"60px", borderRadius:"50%"}} alt="" />
                    <h6>Ebiendele</h6>
                    <p>Federal University</p>
                </div>
                <div className="col-3">
                    <h4>1.47000</h4>
                </div>
                <div className="col-3">
                    <h4>18 hours Ago</h4>
                </div>
                <div className="col-3">
                    <h4>3 hours</h4>
                </div>
            </div>
        </div>
    );
}

export default LeaderBoardUsers;