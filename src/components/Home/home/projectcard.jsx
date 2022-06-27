import React, { Fragment } from 'react';
import image1 from '../../projects/images/project.jpg'
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './css/projectcard.module.css';
import Badge from 'react-bootstrap/Badge';

function ProjectCard() {
    return (
        <Fragment>
            <div className={clsx("card m-2", styles.card)} >
                <div className="row">
                    <div className={clsx("col-auto", styles.col, styles.imgdiv)}>
                        <img src={image1} alt="" srcset="" className={clsx('img roundedCircle', styles.img)} />
                    </div>
                    <div className={clsx("col-6 m-2", styles.col)}>
                        <Link className={clsx("mt-3", styles.link, styles.col)} to="/projects/detail">
                            <strong className={clsx(styles.title, styles.col)}>Brain Health Detection <span className={clsx("d-inline badge m-2", styles.col, styles.badge)} style={{ backgroundColor: "#0B0B45" }}>Health</span>
                                <span className={clsx("d-inline badge m-2", styles.title, styles.badge)} style={{ backgroundColor: "#fcb70f" }}>Sponsor this project</span>
                            </strong>
                            <p>In brain tumor classification using machine learning, we built a binary classifier to detect brain tumors from MRI scan images.</p>
                        </Link>
                        <div className={clsx(styles.col)}>
                            <div className="row d-flex">
                                <div className="col">
                                    <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>TensorFlow</p>
                                </div>
                                <div className="col">
                                    <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>Keras</p>
                                </div>
                                <div className="col">
                                    <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>Python</p>
                                </div>
                                <div className="col">
                                    <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>Open CV</p>
                                </div>
                                <div className="col">
                                    <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>Numpy</p>
                                </div>
                                <div className="col">
                                    <p className={clsx("badge m-1", styles.badge)} style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>sklearn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={clsx("col-2 m-2 mt-5", styles.col)}>
                        <div className={clsx("data justitify-content-end", styles.next)}>
                            <h6>Contributors <Badge bg="secondary">25</Badge></h6>
                            <h6>Mentors <Badge bg="secondary">04</Badge></h6>
                            <h6>Organizations <Badge bg="secondary">03</Badge></h6>
                            <h6>Mentors <Badge bg="secondary">04</Badge></h6>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProjectCard;