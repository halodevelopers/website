import React from 'react';
import NavBar from '../Common/navigation';
import CommunityCard from './communityTitleCard';


function Community() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="header" style={{marginTop:"30px"}}>
                    <h3>Community</h3>
                    <p>Explore our incredible community, connect with fellow data</p>
                    <p>scientists, and learn from the best.</p>
                </div>
                <CommunityCard/>
            </div>
        </div>
    );
}

export default Community;