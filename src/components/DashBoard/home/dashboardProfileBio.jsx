import React from 'react';

function DashBoardProfileBio() {
    return ( 
        <div className="row">
            <div className="row">
                <div>
                    <h3 style={{float:"left"}}>Bio</h3>
                    <button className="btn btn-outline-dark" style={{float:"right"}}>Edit</button>
                </div>
                <div>
                    <p>No Bio</p>
                </div>
            </div>
        </div>
     );
}

export default DashBoardProfileBio;