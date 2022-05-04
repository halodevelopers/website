import React, { Fragment } from 'react';

function ProjectSideBarCard() {
    return (
        <Fragment>
            <div className="card">
                <div className="content m-3">
                    <div className="about">
                        <h5>About</h5>
                        <div className="about-body">
                            <p>
                                Deep learning (subfield of machine learning) has gained prominence in almost every
                                field where decision-making is involved in recent years, spanning economics, health
                                care, marketing, and sales. In the field of healthcare, machine learning &
                                deep learning have shown promising results in a variety of fields, namely
                                disease diagnosis with medical imaging, surgical robots, and boosting hospital
                                performance.
                                One such application of deep learning to detect brain tumors from MRI scan images.
                            </p>
                        </div>
                    </div>

                    <div className="tools mt-3">
                        <h5>Tools</h5>
                        <div className="tool-body">
                            <p className="badge bg-dark m-2">GitHub</p>
                            <p className="badge bg-dark m-2">Python</p>
                            <p className="badge bg-dark m-2">Stack</p>
                            <p className="badge bg-dark m-2">React js</p>
                        </div>
                    </div>
                    <div className="releases mt-3">
                        <h5>Releases</h5>
                        <div className="release-body">
                            No Releases Yet
                        </div>
                    </div>
                    <div className="packages mt-3">
                        <h5>Packages</h5>
                        <div className="package-body">
                            No Packages Yet
                        </div>
                    </div>
                    <div className="contributors mt-3">
                        <h5>Contributors</h5>
                        <div className="contributor-body">
                            <li style={{listStyleType:"none"}}>Atwanzire</li>
                            <li style={{listStyleType:"none"}}>Rogers</li>
                            <li style={{listStyleType:"none"}}>Mukibi</li>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default ProjectSideBarCard;