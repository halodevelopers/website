import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ScrollableTabsButtonAuto from './tab-card';
import clsx from 'clsx';
import NavBar from "../Common/navigation";
import styles from './css/homepage.module.css';

// Home Import componets
import LearnSection from './learn.jsx';
import JoinUs from './joinOurCommunity';
import Partnership from './patnership';
import HeroLink from './home/herolink';
import Pride from "./home/works";
import Project from "./home/projects";
import Description from "./home/description";
import Organization from "./home/organization";

// import AnnouncementBar from '../Common/anouncementbar';



class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavBar />
                <div className={clsx("container-fluid hero hero-text ", styles.hero)}><br />
                    <h1 className='text-center' >
                        Learn, grow, build

                    </h1>
                    <h1 className='text-center' >

                        Connections and help

                    </h1>
                    <h1 className='text-center' >

                        Transform the world with AI
                    </h1>
                    <div className="d-flex justify-content-center">
                        <button type="button" className={clsx("button", styles.btn)}>Join Halodevs</button>
                        <button type="button" className={clsx("button", styles.btn1)}>Partner with Halodevs</button>
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
                {/* Links */}
                {/* <div className="hero-theme">
                    <div className={clsx("grid-x grid-padding-x grid-x--equal-height", styles.herolink)}>
                        <HeroLink href="/students" name="students" />
                        <HeroLink href="/patners" name="partners" />
                        <HeroLink href="/coaches" name="coaches" />
                    </div>
                </div> */}
                {/* Pride */}
                <Pride />
                <Description />
                <Partnership />
                <Organization />
                
                
                <Project />
                {/* Learn Section */}
                {/* <div className="container">
                    <ScrollableTabsButtonAuto className={clsx("scroll", styles.scroll)} />
                </div>

                
                <LearnSection /> */}
                <JoinUs />
            </div>
        );
    }
}

export default Home;