import React, { Fragment } from 'react';
import NavBar from '../Common/navigation';
import ProjectHero from './projectHero';
import ProjectDetailTab from './projectDetailTab';
import styles from './css/projectDetails.module.css';
import clsx from 'clsx';

function ProjectDetail() {
    return ( 
        <Fragment>
            <NavBar/>
            <div className={clsx("hero container-fluid", StyleSheet.herodata)}>
                <ProjectHero/>
            </div>
            <div className={clsx("container", styles.container)}>
                <ProjectDetailTab/>
            </div>
        </Fragment>
     );
}

export default ProjectDetail;