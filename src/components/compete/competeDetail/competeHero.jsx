import React, { Component } from 'react';
import styles from './css/competeDetail.module.css';
import clsx from 'clsx';


class CompeteHero extends Component {
    state = {}
    render() {
        return (
            <div className={clsx('row container-fluid  text-çenter', styles.hero)} style={{ textAlign: "center" }}>
                <div className={clsx(styles.div_space)}>
                    <div>
                        <h2 className={clsx(styles.header_title)}>Turtle Rescue Forecast Challenge</h2>
                    </div>
                    <div className={clsx(styles.div_space)}>
                        <h3 className={clsx(styles.header_subtitle)}>Can you forecast the number of turtles rescued per site per week in Kenya?</h3>
                    </div>
                </div>
                <div className="col">
                    <h4 className={clsx(styles.title_text)}>Prize</h4>
                    <p>Knowledge</p>
                </div>
                <div className="col">
                    <h4 className={clsx(styles.title_text)}>Time</h4>
                    <p>active</p>
                </div>
                <div className="col">
                    <h4 className={clsx(styles.title_text)}>Participants</h4>
                    <p>2 active · 16 enrolled</p>
                </div>
                <div className="col">
                    <h4 className={clsx(styles.title_text)}>Helping</h4>
                    <p>Kenya</p>
                </div>
            </div>
        );
    }
}

export default CompeteHero;