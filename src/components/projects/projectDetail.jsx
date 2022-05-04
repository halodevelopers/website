import React, { Fragment } from 'react';
import NavBar from '../Common/navigation';
import ProjectHero from './projectHero';
import ProjectDetailTab from './projectDetailTab';

function ProjectDetail() {
    return ( 
        <Fragment>
            <NavBar/>
            <div className="hero">
                <ProjectHero/>
            </div>
            <div className='container-fluid'>
                <ProjectDetailTab/>
            </div>
        </Fragment>
     );
}

export default ProjectDetail;