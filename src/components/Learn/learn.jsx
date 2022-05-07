import React, { Fragment } from 'react';
import NavBar from '../Common/navigation';
import LearnTab from './learnTab';
import styles from './css/learn.module.css';
import clsx from 'clsx';

function Learn() {
    return (
        <Fragment>
            <div >
                <div >
                    <NavBar />
                </div>
                <div className={clsx(styles.header)}>
                    <div className={clsx(styles.hero, "container")}>
                        <div className={clsx(styles.hero_text)}>
                            <h1 className={clsx(styles.heading)} >Learn</h1>
                            <p className={clsx(styles.body_param)}>Start your machine learning journey, brush up on your technical skills, and learn winning approaches from the best of HaloDevs.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab container">
                <LearnTab />
            </div>
        </Fragment>
    );
}

export default Learn;