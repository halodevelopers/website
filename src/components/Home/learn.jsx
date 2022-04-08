import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import MediaCard from './cards';
import styles from './css/learn.module.css';
import clsx from 'clsx';

class LearnSection extends Component {
    state = {}
    render() {
        return (
            <div className={clsx("container learn", styles.learn)}>
                <div className={clsx('text-title', styles.text)}>
                    <h1>Learn And Master</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <MediaCard />
                        </div>
                        <div className="col">
                            <MediaCard />
                        </div>
                        <div className="col">
                            <MediaCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LearnSection