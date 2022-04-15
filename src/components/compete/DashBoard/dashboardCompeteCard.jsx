import { ThreeSixty } from '@material-ui/icons';
import React, { Component } from 'react';
import tatanic from './images/tatanic.png';

class DashBoardCompeteCard extends Component {
    state = {}

    Card = () => (
        <div className="row">
            <div className="col">
                <img src={tatanic} alt="" srcset="" />
            </div>
            <div className="col">
                <h5>Titanic - Machanic Learning from Disaster</h5>
                <p>Start here! Predict survival on the Titanic and get familiar with ML basics</p>
            </div>
        </div>
    )
    render() {
        return (
            <div className="contanier">
                <div className="row">
                    <div className="col">
                        <img src={tatanic} alt="" srcset="" />
                    </div>
                    <div className="col">
                        <h5>Titanic - Machanic Learning from Disaster</h5>
                        <p>Start here! Predict survival on the Titanic and get familiar with ML basics</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoardCompeteCard;