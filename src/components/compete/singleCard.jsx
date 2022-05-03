import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import zindi from './images/zindi.jpg';
import styles from './css/competeCard.module.css';
import clsx from 'clsx';



// creating a singleCard for competitions used in competeCard.jsx  
class SingleCard extends Component {
    state = {}
    render() {
        return (
            <div className={clsx(styles.compete_card)}>
                <div className="row">
                    <div className="col-3">
                        <img src={zindi} className={clsx("float-start", styles.compete_img)} alt="..."></img>
                    </div>
                    <div className="col-6 mt-2">
                        <Link className={clsx(styles.link)} to="/compete/detail">
                            <h6 className={clsx(styles.comptete_title_inner)}>Torture Resue Forecast Challenge</h6>
                            <p>Can you forecast the number of turtles rescued per site per week in Kenya?</p>
                        </Link>
                    </div>
                    <div className="col-3">
                        <h6 style={{color:"#0B0B45"}}>Knowledge</h6>
                        <div className={clsx(styles.card_body)}>
                            <p style={{ margin: "5px" }}>Active</p>
                            <p style={{ margin: "0px", opacity: ".8" }}>12 active</p>
                            <p style={{ margin: "0px", opacity: ".8" }}>11 enrolled</p>
                        </div>
                        <p style={{ margin: "5px" }}>Helping Kenya</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleCard;