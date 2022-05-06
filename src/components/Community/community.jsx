import React from 'react';
import NavBar from '../Common/navigation';
import CommunityCard from './communityTitleCard';
import styles from './css/community.module.css';
import clsx from 'clsx';


function Community() {
    return (
        <div>
            <NavBar />
            <div className={clsx(styles.header)}>
                <div className={clsx(styles.hero, "container")}>
                    <div className={clsx(styles.hero_text)}>
                        <h1 className={clsx(styles.heading)}>Community</h1>
                        <p className={clsx(styles.body_param)}>
                            Explore our incredible community, connect with fellow data
                            scientists, and learn from the best.
                        </p>
                    </div>
                </div>
            </div>
            <CommunityCard />
        </div>
    );
}

export default Community;