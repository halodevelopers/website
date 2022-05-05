import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import styles from './css/description.module.css';
import clsx from 'clsx';


const Description = () => {
    return (
        <div className={clsx("container", styles.description)}>
            <div className="row">
                <div className="col-md-12">
                    <div className={clsx("text-center", styles.text)}  >
                        Zindi hosts the largest community of African data scientists, working to solve the world’s most pressing challenges using machine learning and AI. We connect data scientists with organisations, and provide a place to learn, hone your skills and find a job. We want to transform the African continent and showcase African data science talent to the world
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;