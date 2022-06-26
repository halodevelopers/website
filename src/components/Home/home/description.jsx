import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './css/description.module.css';
import clsx from 'clsx';


const Description = () => {
    return (
        <div className={clsx("container", styles.description)}>
            <p className={clsx("text-center", styles.text)}  >
                Halodevs' mission is to build safe artificial general intelligence (AGI) which benefits all of humanity, working to solve the world’s most pressing challenges using machine learning and AI. We are builders who care deeply about real-world implications and applications. We want to transform the globe, and showcase our talent & the power of opensource to the world
            </p>
            {/*                         Halodevs' mission is to build safe artificial general intelligence (AGI) which benefits all of humanity, working to solve the world’s most pressing challenges using machine learning and AI. We are builders who care deeply about real-world implications and applications.  We connect data scientists with organisations, and provide a place to learn, hone your skills and find a job. We want to transform the globe & African continent and showcase African data science talent & the power of opensource to the world*/}
        </div>
    );
};

export default Description;