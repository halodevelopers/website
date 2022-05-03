import React from 'react';
import nodataset from './images/nodatasets.png';

function NoWork(props) {
    return ( 
        <div className='container text-center'>
            <div >
            <img src={nodataset} alt="no item" />
            </div>
            <div>
                <h6>No {props.name} Found</h6>
                <p>We couldn't find any relevant {props.name} on HaloDev.</p>
            </div>
        </div>
     );
}

export default NoWork;