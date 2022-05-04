import React, { Fragment } from 'react';
import ProjectSearch from './search';
import styles from './css/projectcards.module.css';
import clsx from 'clsx';
import SpomsorCard from './sponserCard';

function ProjectSponser() {
    return ( 
        <Fragment>
            <div>
                <h5>Be A Sponser</h5>
                <p>Your Donation with Save and Change the  World</p>
            </div>
            <div style={{paddingTop:'25px', paddingBottom:'30px'}}>
                <ProjectSearch name = "Sponser"/>
            </div>

            {/* Sponser Card Titles*/}
            <div className={clsx(styles.card_titles)}>
            <div className="row text-center">
                <div className="col-2">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>LOGO</h6>
                    </div>
                </div>
                <div className="col-3">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>COMPANY NAME</h6>
                    </div>
                </div>
                <div className="col-2">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>ADDRESS</h6>
                    </div>
                </div>
                <div className="col-2">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>REMARKS</h6>
                    </div>
                </div>
                <div className="col-1">
                    <div className="heading">
                        <h6 className={clsx(styles.card_heading)}>CREATED</h6>

                    </div>
                </div>
            </div>
            <SpomsorCard/>
        </div>
        </Fragment>
     );
}

export default ProjectSponser;