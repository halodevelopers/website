import React from 'react';
import nodataset from './images/nodatasets.png';
function NoDataset() {
    return ( 
        <div className='container text-center'>
            <div >
            <img src={nodataset} alt="" />
            </div>
            <div>
                <h6>No Datasets Found</h6>
                <p>We couldn't find any relevant datasets on Kaggle.</p>
            </div>
        </div>
     );
}

export default NoDataset;