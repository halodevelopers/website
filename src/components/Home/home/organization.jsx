import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './css/organization.module.css';
import clsx from 'clsx';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardMedia from '@mui/material/CardMedia';
import Light from './svg/light';
import Trophy from './svg/tropy';
import Puzzle from './svg/puzzle';
import Dice from './svg/dic';

const Organization = () => {
    return (
        <div className={clsx("container", styles.organization)}>
            <div className={clsx("text", styles.text)}  >
                <p>See how Halodevs can help your organisation</p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className={clsx("card", styles.card)}>
                        <div className="card-body">

                            <CardHeader

                                avatar={
                                    <Light />

                                }

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                            />
                            <h5 className={clsx("card-title titletext", styles.title)}>
                                <strong>Solve a problem</strong>
                            </h5>
                            <p className="card-text">
                                We work with you to define and set up your machine learning challenge. 
                                Our community of data scientists solves the challenge through a competition 
                                and you receive the winning solutions.</p>
                            <a href="#" className={clsx("btn", styles.btn)}>
                                Join Us <ArrowRightAltIcon className="icon-right" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={clsx("card", styles.card)}>
                        <div className="card-body">
                            <CardHeader
                                avatar={
                                    <Trophy />

                                }

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                            />
                            <h5 className={clsx("card-title", styles.title)}>
                                <strong>Find the best talent</strong>
                            </h5>
                            <p className="card-text">
                                With thousands of skilled individuals across data science, artificial intelligence, 
                                machine learning and data engineering specialisations, Halodevs helps you find the 
                                best talent.                            </p>
                            <a href="#" className={clsx("btn", styles.btn)}>
                                Join Us <ArrowRightAltIcon className="icon-right" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={clsx("card", styles.card)}>
                        <div className="card-body">
                            <CardHeader
                                avatar={
                                    <Puzzle />

                                }

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                            />
                            <h5 className={clsx("card-title", styles.title)}>
                                <strong>Build Your Brand</strong>
                            </h5>
                            <p className="card-text">
                                Halodevs hosts the largest community of data scientists in Africa. For organisations wishing to build their brand amongst this unique audience, Halodevs is the place to go.                            </p>
                            <a href="#" className={clsx("btn", styles.btn)}>
                                Join Us <ArrowRightAltIcon className="icon-right" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={clsx("card", styles.card)}>
                        <div className="card-body">
                            <CardHeader
                                avatar={
                                    <Dice />

                                }

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }

                            />
                            <h5 className={clsx("card-title", styles.title)}>
                                <strong>Improve your organisation’s skills</strong>
                            </h5>
                            <p className="card-text">
                                Build your organisation’s skills by hosting a hackathon on Halodevs. Hackathons are short, fun, problem-solving sprints, usually run over 1–3 days designed to challenge your organisation’s skills and foster collaboration.                            </p>
                            <a href="#" className={clsx("btn", styles.btn)}>
                                Join Us <ArrowRightAltIcon className="icon-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Organization;