import React, { Component } from 'react';

class Intro extends Component {
    state = {}
    render() {
        return (
                <div style={{width:"90%", margin:"auto"}} className='mt-5 text-align'>
                    <h5 style={{fontSize:"20px"}}>Compete</h5>
                    <p style={{fontSize:"16px", width:"70%"}}>Participate in competitions for money, knowledge and platform points.</p>
                    <hr  style={{ width: "100%" }} />
                </div>
        );
    }
}

export default Intro;