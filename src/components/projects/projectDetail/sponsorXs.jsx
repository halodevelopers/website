import React from 'react';
import zindi from './images/zindi.png';


function SponserXs() {
    return (
        <div className="col m-1">
            <div class="card" style={{ width: "12rem" }}>
                <img className="card-img-top" src={zindi} alt="product img" />
                <div className="card-body">
                    <h5 className="card-title fs-5">Zindi Africa</h5>
                    <p className="card-text fs-6">Africa</p>
                    <p className="card-text fs-6">Its Great to Improve Human Health</p>
                    <p className="card-text fs-6">3 Days Ago</p>
                </div>
            </div>
        </div>
    );
}

export default SponserXs;