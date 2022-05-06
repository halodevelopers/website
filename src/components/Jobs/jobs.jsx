import React, { Fragment } from 'react';
import NavBar from '../Common/navigation';
import FilterSideBAr from './filterSideBar';
import JobCard from './jobCard';
import clsx from 'clsx';
import styles from './css/jobs.module.css';

function Jobs() {
    return (
        <Fragment>
            <NavBar />
            <div className={clsx(styles.header)}>
                <div className={clsx(styles.hero, "container")}>
                    <div className={clsx(styles.hero_text)}>
                        <h1 className={clsx(styles.heading)} >Find A Job</h1>
                        <p className={clsx(styles.body_param)}>We can help you find your first job, or your next job. Explore your opportunities.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr style={{ width: "95%" }} />
            </div>
            <div className="row container">
                <div className="col-4">
                    <FilterSideBAr />
                </div>
                <div className="col">
                    <div>
                        <input type="text" id="search_input" placeholder='Search For Comptitions ...' className={clsx(styles.input, styles.input_form)} />
                    </div>
                    <div className="jobs">
                        <div className="job-count">
                            Jobs: 9
                        </div>
                        <div>
                            <JobCard />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Jobs;