import React, { Component } from 'react';

class Prize extends Component {
    state = {}
    render() {
        return (
            <div className='container top-margin mt-5'>
                <h5 style={{fontSize:"16px"}} id='prize'>Prize</h5>
                <p style={{fontSize:"14px"}}>
                    This is a learning competition. Aside from knowledge, there are no prizes for this competition.
                </p>
            </div>
        );
    }
}

export default Prize;