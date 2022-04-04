import React, { Component } from 'react';

class CompeteHero extends Component {
    state = {  } 
    render() { 
        return (
            <div className='row container-fluid  text-çenter' style={{textAlign:"center"}}>
                <div>
                    <h2>Turtle Rescue Forecast Challenge</h2>
                </div>
                <div>
                    <h3>Can you forecast the number of turtles rescued per site per week in Kenya?</h3>
                </div>
                <div className="col">
                    <h4>Prize</h4>
                    <p>Knowledge</p>
                </div>
                <div className="col">
                    <h4>Time</h4>
                    <p>active</p>
                </div>
                <div className="col">
                    <h4>Participants</h4>
                    <p>2 active · 16 enrolled</p>
                </div>
                <div className="col">
                    <h4>Helping</h4>
                    <p>Kenya</p>
                </div>
            </div>
        );
    }
}
 
export default CompeteHero;