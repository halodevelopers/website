import React, { Component } from 'react';

class Timeline extends Component {
    state = {}
    render() {
        return (
            <div className='container top-margin mt-5'>
                <h6 style={{fontSize:"16px"}} id='timeline'>Timeline</h6>
                <p style={{fontSize:"14px"}}>
                    As this is a knowledge competition it will not close.
                    We reserve the right to update the contest timeline if necessary.
                </p>
            </div>
        );
    }
}

export default Timeline;