import React, { Component } from 'react';
import Halodev from '../../pages/halodev';
import NavBar from "../Common/navigation";
import RewardCheckBox from './Reward';
import DifficultyCheckBox from './Difficulty';
import Intro from './intro';
import CompteteCard from './competeCard';


// Creating the competion page
// author : Halodev

class Compete extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavBar />
                <div className="container row m-10">
                    <Intro />
                    <div className="col-3 mt-5">
                        <div className='container'>
                            <RewardCheckBox />
                            <DifficultyCheckBox />
                        </div>
                    </div>
                    <div className="col text-center">
                        <div>
                            <h3>Comptetions 0</h3>
                        </div>
                        <div className='mt-10'>
                            <div>
                                <CompteteCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Compete;
