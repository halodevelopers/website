import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './css/compete.module.css';

class Intro extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className={clsx(styles.header)}>
                    <div className={clsx(styles.hero, "container")}>
                        <div className={clsx(styles.hero_text)}>
                            <h1 className={clsx(styles.heading)}>Compete</h1>
                            <p className={clsx(styles.body_param)}>Participate in competitions for money, knowledge and platform points.</p>
                        </div>
                    </div>
                </div>
                <hr style={{ width: "100%" }} />
            </div>

        );
    }
}

export default Intro;