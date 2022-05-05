import React, { Fragment } from 'react';
import NavBar from '../Common/navigation';
import LearnTab from './learnTab';

function Learn() {
    return (
        <Fragment>
            <div>
                <NavBar />
            </div>
            <div className="container">
                <h5>Learn</h5>
                <p>Start your machine learning journey, brush up on your technical skills, and learn winning approaches from the best of Zindi.</p>
            </div>
            <div className="tab container">
                <LearnTab />
            </div>
        </Fragment>
    );
}

export default Learn;