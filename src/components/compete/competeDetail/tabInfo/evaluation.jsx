import React, { Component } from 'react';

class Evaluation extends Component {
    state = {}
    render() {
        return (
            <div className='container top-margin mt-5'>
                <h5 style={{fontSize:"16px"}} id='evaluation'>Evaluation</h5>
                <p style={{fontSize:"14px"}}>
                    The error metric for this competition is the Root Mean Squared Error.
                </p>
                <p style={{fontSize:"14px"}}>
                    For every row in the dataset, submission files should contain 2 columns: ID and Captured_Number.
                </p>
                <p style={{fontSize:"14px"}}>
                    Your submission file should look like this:
                </p>
            </div>
        );
    }
}

export default Evaluation;