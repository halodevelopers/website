import React, { Component } from 'react';
import NavBar from '../../Common/navigation';
import CompeteHero from './competeHero';
import CompeteTab from './competeTab';

class CompeteDetail extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <NavBar/>
                <CompeteHero/>
                <CompeteTab/>
            </div>
        );
    }
}
 
export default CompeteDetail