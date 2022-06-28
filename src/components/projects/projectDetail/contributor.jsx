import React, { Fragment } from 'react';
import ProjectSearch from './search';
import styles from './css/projectcards.module.css';
import clsx from 'clsx';
import ContributorCard from './contributorCard';
import ContributerXs from './contributerXs';


function ProjectContributor() {
    return (
        <Fragment>
            <div>
                <h5>Contribute</h5>
                <p>Code to Change and Transform the World</p>
            </div>
            <div style={{ paddingTop: '25px', paddingBottom: '30px' }}>
                <ProjectSearch name="Contribute To" />
            </div>

            {/* Contributor Card */}
            <div>
                <div className={clsx(styles.card_titles, styles.sm)}>
                    <div className="row text-center">
                        <div className="col-1">
                            <div className="heading">
                                <h6 className={clsx(styles.card_heading)}>#</h6>
                            </div>
                        </div>
                        <div className="col">
                            <div className="heading">
                                <h6 className={clsx(styles.card_heading)}>USER</h6>
                            </div>
                        </div>
                        <div className="col">
                            <div className="heading">
                                <h6 className={clsx(styles.card_heading)}>GITHUB</h6>
                            </div>
                        </div>
                        <div className="col">
                            <div className="heading">
                                <h6 className={clsx(styles.card_heading)}>CONTRIBUTION TYPE</h6>
                            </div>
                        </div>
                        <div className="col">
                            <div className="heading">
                                <h6 className={clsx(styles.card_heading)}>BEST AT</h6>
                            </div>
                        </div>
                        <div className="col">
                            <div className="heading">
                                <h6 className={clsx(styles.card_heading)}>REMARKS</h6>

                            </div>
                        </div>
                    </div>
                    <ContributorCard />
                </div>
                <div className={clsx(styles.xs, "text-center")}>
                    <ul>
                        <div className="row">
                            < ContributerXs />
                        </div>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default ProjectContributor;