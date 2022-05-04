import React, { Fragment } from 'react';
import zindi from './images/zindi.png';
import styles from './css/projectcards.module.css';
import clsx from 'clsx';


function SpomsorCard() {
    return (
        <Fragment>
            <div className={clsx(styles.card_user)}>
                <div className="row text-center">
                    <div className="col-2">
                        <div className="heading">
                            <img src= {zindi} style={{width:"60px", borderRadius:"50%"}} alt="" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="heading">
                            <h6 className={clsx(styles.card_body)}>Zindi Africa</h6>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="heading">
                            <h6 className={clsx(styles.card_body)}>Africa</h6>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="heading">
                            <h6 className={clsx(styles.card_body)}>Its Great to Improve Human Health</h6>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="heading">
                            <h6 className={clsx(styles.card_body)}>3 Days Ago</h6>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SpomsorCard;