import React, { Fragment } from 'react';
import project from './images/project.jpg';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './css/projectCard.module.css';
import Badge from 'react-bootstrap/Badge';


function ProjectCard() {
    return (
        <Fragment>
            <div className={clsx(styles.card)}>
                <div className={clsx("card m-2", styles.card)}>
                    <div className="row">
                        <div className="col-auto m-auto">
                            <img src={project} className={clsx(styles.proj_img)} alt="" srcset="" />
                        </div>
                        <div className="col-sm-6 col-xs-10 m-2">
                            <Link className={clsx(styles.link, 'link container')} to="/projects/detail">
                                <h6 className={clsx(styles.title)}>Brain Health Detection <span className="d-inline badge m-2" style={{ backgroundColor: "#0B0B45" }}>Health</span></h6>
                                <p className='container-fluid'>In brain tumor classification using machine learning, we built a binary classifier to detect brain tumors from MRI scan images.</p>
                            </Link>
                            <div className={clsx(styles.col)}>
                                <div className="row d-flex">
                                    <div className="col-auto">
                                        <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>TensorFlow</p>
                                    </div>
                                    <div className="col-auto">
                                        <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>Keras</p>
                                    </div>
                                    <div className="col-auto">
                                        <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>Python</p>
                                    </div>
                                    <div className="col-auto">
                                        <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>Open CV</p>
                                    </div>
                                    <div className="col-auto">
                                        <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>Numpy</p>
                                    </div>
                                    <div className="col-auto">
                                        <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>sklearn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx("col-sm-3 col-xs-4 m-2")}>
                            <div className={clsx("data justitify-content-end", styles.next)}>
                                <h6>Contributors <Badge bg="secondary">25</Badge></h6>
                                <h6>Mentors <Badge bg="secondary">04</Badge></h6>
                                <h6>Organizations <Badge bg="secondary">03</Badge></h6>
                                <h6>Mentors <Badge bg="secondary">04</Badge></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProjectCard;