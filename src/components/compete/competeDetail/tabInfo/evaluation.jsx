import React, { Component } from 'react';

class Evaluation extends Component {
    state = {}
    render() {
        return (
            <div className='container top-margin'>
                <h5 id='evaluation'>Evaluation</h5>
                <p>
                    The error metric for this competition is the Root Mean Squared Error.
                </p>
                <p>
                    For every row in the dataset, submission files should contain 2 columns: ID and Captured_Number.
                </p>
                <p>
                    Your submission file should look like this:
                </p>
            </div>
        );
    }
}

export default Evaluation;