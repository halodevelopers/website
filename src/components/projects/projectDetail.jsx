import React, { Fragment } from 'react';
import NavBar from '../Common/navigation';
import ProjectHero from './projectHero';

function ProjectDetail() {
    return ( 
        <Fragment>
            <NavBar/>
            <div className="hero">
                <ProjectHero/>
            </div>
        </Fragment>
     );
}

export default ProjectDetail;