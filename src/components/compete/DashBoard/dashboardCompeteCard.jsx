import React, { Component } from 'react';
import tatanic from './images/tatanic.png';
import styles from './css/dashboard.module.css';
import clsx from 'clsx';

class DashBoardCompeteCard extends Component {
    state = {}

    Card = () => (
        <div className="row">
            <div className="col-3">
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
            <div className={clsx(styles.cardcontainer)}>
                <div className="row">
                    <div className="col-md-3">
                        <img src={tatanic} alt="" style={{borderRadius:"50%"}}/>
                    </div>
                    <div className="col-8 mt-2">
                        <h5>Titanic - Machanic Learning from Disaster</h5>
                        <p>Start here! Predict survival on the Titanic and get familiar with ML basics</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoardCompeteCard;