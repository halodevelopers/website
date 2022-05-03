import React, { Component } from 'react';
import styles from './css/projectDetails.module.css';
import clsx from 'clsx';


class ProjectHero extends Component {
    state = {}
    render() {
        return (
            <div className={clsx('row container-fluid  text-çenter', styles.hero)} style={{ textAlign: "center" }}>
                <div className={clsx(styles.div_space)}>
                    <div>
                        <h2 className={clsx(styles.header_title)}>Brain Disease Detection</h2>
                    </div>
                    <div className={clsx(styles.div_space)}>
                        <h3 className={clsx(styles.header_subtitle)}>In brain tumor classification using machine learning, we built a binary classifier to detect brain tumors from MRI scan images.</h3>
                    </div>
                </div>
                <div className="col">
                    <h4 className={clsx(styles.title_text)}>Theme</h4>
                    <p>Save Human Health</p>
                </div>
                <div className="col">
                    <h4 className={clsx(styles.title_text)}>Duration</h4>
                    <p>3 months</p>
                </div>
                <div className="col">
                    <h4 className={clsx(styles.title_text)}>Contributors</h4>
                    <p>2 active · 4 enrolled</p>
                </div>
                <div className="col">
                    <h4 className={clsx(styles.title_text)}>Helping</h4>
                    <p>Elder</p>
                </div>
            </div>
        );
    }
}

export default ProjectHero;