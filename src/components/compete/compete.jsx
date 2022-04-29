import React, { Component } from 'react';
import Halodev from '../../pages/halodev';
import NavBar from "../Common/navigation";
import RewardCheckBox from './Reward';
import DifficultyCheckBox from './Difficulty';
import Intro from './intro';
import CompteteCard from './competeCard';
import SearchIcon from '@material-ui/icons/Search';
import TopicCheckBox from './topic';

// Creating the competion page
// author : Halodev

class Compete extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavBar />
                <Intro />
                <div style={{width:"90%", margin:"auto"}}>
                    <div className="row">
                        <div className="col">
                            <h6>Filter Competitions</h6>
                        </div>
                        <div className="col-3">
                            <h6 style={{ color: "#1f0f4f" }}>Comptetions 0</h6>
                        </div>
                        <div className="col-auto">
                            <SearchIcon />
                        </div>
                        <div className="col">
                            <input type="text" style={{ width: "60%" }} placeholder='Search For Comptitions ...' className="form-control" />
                        </div>
                    </div>

                    {/* body row */}
                    <div className="row m-10">
                        <div className="col-auto mt-5">
                            <div>
                                <RewardCheckBox />
                                <DifficultyCheckBox />
                                <TopicCheckBox/>
                            </div>
                        </div>
                        <div className="col">
                            <div className='mt-10'>
                                <div>
                                    <CompteteCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Compete;
