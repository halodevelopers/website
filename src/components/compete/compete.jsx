import React, { Component } from 'react';
import Halodev from '../../pages/halodev';
import NavBar from "../Common/navigation";
import RewardCheckBox from './Reward';
import DifficultyCheckBox from './Difficulty';
import Intro from './intro';
import CompteteCard from './competeCard';
import SearchIcon from '@material-ui/icons/Search';
import TopicCheckBox from './topic';
import clsx from 'clsx';
import styles from './css/compete.module.css';


// Creating the competion page
// author : Halodev

class Compete extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavBar />
                <Intro />
                <div style={{ width: "90%", margin: "auto" }}>
                    {/* body row */}
                    <div className="row m-10">
                        <div className="col-auto mt-5">
                            <div>
                                <RewardCheckBox />
                                <DifficultyCheckBox />
                                <TopicCheckBox />
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <input  type="text" id="search_input" placeholder='Search For Comptitions ...' className={clsx(styles.input, styles.input_form)} />
                            </div>
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
