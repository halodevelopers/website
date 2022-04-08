import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ScrollableTabsButtonAuto from './tab-card';
import LearnSection from './learn.jsx'
import clsx from 'clsx';
import NavBar from "../Common/navigation";
import styles from './css/homepage.module.css';
import AnnouncementBar from '../Common/anouncementbar';
class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <AnnouncementBar />
                <NavBar />
                <div className={clsx("container hero hero-text ", styles.hero)}><br />
                    <h1 className='text-center' >
                        Learn, grow, build

                    </h1>
                    <h1 className='text-center' >

                        Connections and help

                    </h1>
                    <h1 className='text-center' >

                        Transform the world with AI
                    </h1>
                    <div className={clsx("text-center", styles.textcenter)}>
                        <button className={clsx("btn btn-primary btn-lg m-2", styles.buttoncompete)} id='btn-solid'>Compete</button>
                        <button className={clsx("btn btn-primary btn-lg m-2", styles.buttonsecond)} id='btn-outline'>Partner with Halodevs</button>
                    </div>
                    {/* <div className="tip-box mt-5">
                        <p style={{fontSize:"1.5rem", fontStyle:"italic"}} className='text-center'>
                            HaloDev hosts the largest community of African data scientists, working to solve the world’s
                            most pressing challenges using machine learning and AI. We connect data scientists with
                            organisations, and provide a place to learn, hone your skills and find a job. We want to
                            transform the African continent and showcase African data science talent to the world
                        </p>
                    </div> */}

                </div>
                <div className="container">
                    <ScrollableTabsButtonAuto className={clsx("scroll", styles.scroll)} />
                </div>
                <LearnSection />
            </div>
        );
    }
}

export default Home;