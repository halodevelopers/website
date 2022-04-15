import React, { Component } from 'react';
import NavBar from '../../Common/navigation';
import UserCard from './userCard';
import DashboardTab from './dashboardTab';

class DashBoard extends Component {
    state = {}
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                    <UserCard />
                </div>
                <div>
                <div>
                    <DashboardTab/>
            </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;