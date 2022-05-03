import React, { Fragment } from 'react';
import NavBar from '../Common/navigation';
import ProjectTab from './projectTab';
import clsx from 'clsx';
import styles from './css/projects.module.css';


function Projects() {
    return ( 
        <Fragment>
            <NavBar/>
            <div className={clsx("container")}>
            <div className={clsx(styles.header)} style={{marginTop:"30px"}}>
                    <h3 className={clsx(styles.title)}>Projects</h3>
                    <p style={{width:'50%'}}>Explore our incredible community, connect with fellow data
                    scientists, and learn from the best.</p>
                </div>
                <ProjectTab/>
            </div>
        </Fragment>
     );
}

export default Projects;