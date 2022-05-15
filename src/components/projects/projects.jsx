import React, { Fragment } from 'react';
import NavBar from '../Common/navigation';
import ProjectTab from './projectTab';
import clsx from 'clsx';
import styles from './css/projects.module.css';


function Projects() {
    return (
        <Fragment>
            <NavBar />
            <div className={clsx(styles.header)}>
                <div className={clsx(styles.hero, "container")}>
                    <div className={clsx(styles.hero_text, 'heroic')}>
                        <h4 className={clsx(styles.title1)}>Projects</h4>
                        <strong className={clsx(styles.title)}>You believe in Opensource! </strong>
                        <p  className={clsx(styles.body_param)}>Explore our incredible community, connect with fellow data
                            scientists, and learn from the best.</p>
                    </div>
                </div>
            </div>
            <ProjectTab />
        </Fragment>
    );
}

export default Projects;