import React, { Fragment } from 'react';
import project from './images/project.jpg';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './css/projects.module.css';

function ProjectCard() {
    return ( 
        <Fragment>
            <div className="card m-2" style={{height:'10em'}}>
                <div className="row">
                    <div className="col-auto">
                        <img src={project} style={{height:'10em'}} alt="" srcset="" />
                    </div>
                    <div className="col-6 m-2">
                        <Link className={clsx(styles.link)} to="/projects/detail">
                            <h6 className={clsx(styles.title)}>Brain Health Detection <span className="d-inline badge m-2" style={{backgroundColor : "#0B0B45"}}>Health</span></h6>
                            <p>In brain tumor classification using machine learning, we built a binary classifier to detect brain tumors from MRI scan images.</p>
                        </Link>
                        <div >
                            <p className="d-inline badge m-2" style={{backgroundColor : "#c8c8e6", color:"#0B0B45"}}>Python</p>
                            <p className="d-inline badge m-2" style={{backgroundColor : "#c8c8e6", color:"#0B0B45"}}>TensorFlow</p>
                            <p className="d-inline badge m-2" style={{backgroundColor : "#c8c8e6", color:"#0B0B45"}}>Keras</p>
                            <p className="d-inline badge m-2" style={{backgroundColor : "#c8c8e6", color:"#0B0B45"}}>Open CV</p>
                            <p className="d-inline badge m-2" style={{backgroundColor : "#c8c8e6", color:"#0B0B45"}}>Numpy</p>
                            <p className="d-inline badge m-2" style={{backgroundColor : "#c8c8e6", color:"#0B0B45"}}>sklearn</p>
                        </div>
                    </div>
                    <div className="col">
                        
                    </div>
                </div>
            </div>
        </Fragment>
     );
}

export default ProjectCard;