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
            <div className={clsx(styles.compete_card, 'card mt-2')}>
                <div className={clsx("row", styles.col)}>
                    <div className="col-auto m-auto">
                        <div className={clsx("m-1", styles.col_3, styles.col)}>
                            <div className={clsx(styles.col)}>
                                <img src={zindi} className={clsx("text-center", styles.compete_img)} alt="..."></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 m-1">
                        <div className={clsx("mt-2", styles.col_6, styles.col)}>
                            <Link className={clsx(styles.link, styles.col)} to="/compete/detail">
                                <h6 className={clsx(styles.comptete_title_inner)}>Torture Resue Forecast Challenge</h6>
                                <p className={clsx(styles.comptete_p)}>Can you forecast the number of turtles rescued per site per week in Kenya?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-2 m-1">
                        <div className={clsx(styles.col, styles.col_2)}>
                            <div className={clsx(styles.card_body)}>
                                <h6 style={{ color: "#0B0B45", marginLeft: "10px", fontSize: "15px" }}>Knowledge</h6>
                                <ul>
                                    <li className={clsx(styles.card_list)} style={{ marginBottom: "5px" }}>Active</li>
                                    <li className={clsx(styles.card_list)} style={{ opacity: ".8" }}>12 active</li>
                                    <li className={clsx(styles.card_list)} style={{ opacity: ".8" }}>11 enrolled</li>
                                    <li className={clsx(styles.card_list)} style={{ marginTop: "5px" }}>Helping Kenya</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleCard;