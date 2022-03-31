import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import MediaCard from './cards';

class LearnSection extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div>
                    <h1>Learn And Master</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <MediaCard />
                        </div>
                        <div className="col">
                            <MediaCard />
                        </div>
                        <div className="col">
                            <MediaCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LearnSection