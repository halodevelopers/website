import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// creating a singleCard for competitions used in competeCard.jsx  
class SingleCard extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <img src="./zindi.png" class="img-thumbnail rounded float-start" alt="..."></img>
                </div>
                <div className="col-6 text-lowercase">
                <Link to="/compete/detail">
                    <h4 className='text-lowercase'>Torture Resue Forecast Challenge</h4>
                    <p>Can you forecast the number of turtles rescued per site per week in Kenya?</p>
                </Link>
                </div>
                <div className="col-3 text-lowercase">
                    <h5>Knowledge</h5>
                    <div>
                        <p>Active</p>
                        <p>12 active</p>
                        <p>11 enrolled</p>
                    </div>
                    <p>Helping Kenya</p>
                </div>
                <hr />
            </div>
        );
    }
}

export default SingleCard;