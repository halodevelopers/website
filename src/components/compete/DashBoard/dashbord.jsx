import React, { Component } from 'react';
import NavBar from '../../Common/navigation';
import UserCard from './userCard';

class DashBoard extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <NavBar/>
                <UserCard/>
            </div>
        );
    }
}
 
export default DashBoard;