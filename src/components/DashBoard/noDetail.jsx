import React, { Component } from 'react';
import noDetail from "./images/noDetail.png"

class NoDetail extends Component {
    state = {  } 
    render() { 
        return (
            <div className="text-center">
                <div>
                <img src={noDetail} alt="" srcset="" />
                </div>
                <div>
                    <h3>You haven't submitted to this competition.</h3>
                </div>
                <div>
                    <button className='btn btn-outline-dark'>Learn About The Competition</button>
                </div>
            </div>
        );
    }
}
 
export default NoDetail;