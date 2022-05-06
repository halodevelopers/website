import React, { Fragment } from 'react';
import NavBar from '../Common/navigation';
import FilterSideBAr from './filterSideBar';
import JobCard from './jobCard';

function Jobs() {
    return (
        <Fragment>
            <NavBar />
            <div className="container">
                <h5>Find A Job</h5>
                <p>We can help you find your first job, or your next job. Explore your opportunities.</p>
            </div>
            <div className="row container">
                <div className="col-auto">
                    <FilterSideBAr />
                </div>
                <div className="col">
                    <div className='text-center'>
                        <input type="text" placeholder='Search Jobs ...' className='form-control' />
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