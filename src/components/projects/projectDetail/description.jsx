import React, { Fragment } from 'react';
import NoWork from '../../DashBoard/nowork';

function ProjectDescription() {
    return (
        <Fragment>
            <div className="row container-fuild">
                <div className="col-auto links">
                    <nav>
                        <ul className='m-2'>
                            <li className='nav-link'><a href="#intro">INTRO</a></li>
                            <li className='nav-link'><a href="#about">ABOUT</a></li>
                            <li className='nav-link'><a href="#tools">TOOLS</a></li>
                            <li className='nav-link'><a href="#program">PROGRAM</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col">
                    <div id="intro">
                        <h5>Brain Tumor Classification using Machine Learning</h5>
                        <p>Deep learning (subfield of machine learning) has gained prominence in almost every
                            field where decision-making is involved in recent years, spanning economics, health
                            care, marketing, and sales. In the field of healthcare, machine learning &
                            deep learning have shown promising results in a variety of fields, namely
                            disease diagnosis with medical imaging, surgical robots, and boosting hospital
                            performance.
                            One such application of deep learning to detect brain tumors from MRI scan images.
                        </p>
                    </div>
                    <div id="about">
                        <h5>About Brain Tumor Classification Project</h5>
                        <p>
                            In this machine learning project, we build a classifier to detect the brain tumor
                            (if any) from the MRI scan images. By now it is evident that this is a binary
                            classification problem. Examples of such binary classification problems are Spam
                            or Not spam, Credit card fraud (Fraud or Not fraud).
                        </p>
                    </div>
                    <div id="tools">
                        <h5>Tools and Libraries used</h5>
                        <ul>
                            <li>Python – 3.x</li>
                            <li>TensorFlow – 2.4.1</li>
                            <li>Keras – 2.4.0</li>
                            <li>Numpy – 1.19.2</li>
                            <li>Scikit-learn – 0.24.1</li>
                            <li>Matplotlib – 3.3.4</li>
                            <li>OpenCV – 4.5.2</li>
                        </ul>
                    </div>
                    <div id="program">
                        <h5>Program</h5>
                        <NoWork name="program" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProjectDescription;