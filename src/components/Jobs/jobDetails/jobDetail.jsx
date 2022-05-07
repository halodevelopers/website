import React, { Fragment } from 'react';
import NavBar from '../../Common/navigation';
import JobHeader from './header';
import JobBody from './jobbody';

function JobDetail() {
    return ( 
        <Fragment>
            <NavBar/>
            <div>
                <div>
                    <JobHeader/>
                </div>
                <div className='mt-5'>
                    <JobBody/>
                </div>
            </div>
        </Fragment>
     );
}

export default JobDetail;