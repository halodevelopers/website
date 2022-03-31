import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ScrollableTabsButtonAuto from './tab-card';
import LearnSection from './learn.jsx'
import NavBar from "../Common/navigation";


class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container hero-text"><br />
                    <h1 className='text-center'>
                        Learn, grow, build
                        connections and help
                        transform the world with AI
                    </h1>
                    <div className="text-center">
                        <button className="btn btn-lg m-2" id='btn-solid'>Compete</button>
                        <button className="btn btn-lg btn-outline-primary" id='btn-outline'>Work With HaloDev</button>
                    </div>
                    <ScrollableTabsButtonAuto />
                    <div className="tip-box mt-5">
                        <p style={{fontSize:"1.5rem", fontStyle:"italic"}} className='text-center'>
                            HaloDev hosts the largest community of African data scientists, working to solve the world’s
                            most pressing challenges using machine learning and AI. We connect data scientists with
                            organisations, and provide a place to learn, hone your skills and find a job. We want to
                            transform the African continent and showcase African data science talent to the world
                        </p>
                    </div>
                    <LearnSection />
                </div>
            </div>
        );
    }
}

export default Home;