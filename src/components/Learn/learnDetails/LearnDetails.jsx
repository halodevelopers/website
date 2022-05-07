import React, { Fragment } from 'react';
import NavBar from '../../Common/navigation';
import styles from './css/learndetails.module.css';
import clsx from 'clsx';
import LearnBody from './learnBody';

function LearnDetail() {
    return (
        <Fragment>
            <NavBar />
            <div className={clsx(styles.header)}>
                <div className={clsx(styles.hero, "container text-center mt-5 ")}>
                    {/* <img className={clsx(styles.img)} src="https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?fit=bounds&format=jpg&width=960" alt="" srcset="" /> */}
                </div>
            </div>
            <LearnBody/>
        </Fragment>
    );
}

export default LearnDetail;