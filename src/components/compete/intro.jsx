import React, { Component } from 'react';

class Intro extends Component {
    state = {}
    render() {
        return (
                <div className='mt-5 container text-align'>
                    <h1>Compete</h1>
                    <p >Participate in competitions for money, knowledge and platform points.</p>
                    <hr  style={{ width: "90%" }} />
                </div>
        );
    }
}

export default Intro;