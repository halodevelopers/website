import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from './images/avatar.jpg';

class UserCard extends Component {
    state = {}
    render() {
        return (
            <div className="container mt-5">
                <div className='row'>
                    <div className="col">
                        <img src={avatar} style={{ width: "200px" }} class="img-thumbnail rounded float-start" alt="..."></img>
                    </div>
                    <div className="col-8">
                        <h4>Atwanzire Timothy Ian</h4>
                        <p>Data Scientist</p>
                        <p>HaloDev</p>
                        <p>Uganda</p>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;