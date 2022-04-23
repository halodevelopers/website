import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './css/joinus.module.css';
import clsx from 'clsx';


class JoinUs extends Component{
    state = {}
    render(){
        return (
            <div className={clsx("container-fluid", styles.container)}>
                <div className={clsx("row", styles.row)}>
                    <div className="col-md-6 border">
                        <div className="text">
                            <div className={clsx("title", styles.title)}>
                                <h1>
                                    Join our community of bright minds
                                </h1>
                            </div>
                            <div className="p">
                            There are more than 30 000 people in our community from novices to experts. Get noticed by companies through participating in competitions.
                            </div>
                        </div>
                        <div className="explore">
                            <a href="/compete">
                                <button type="button" className={clsx(styles.btn)} id='btn-outline' >
                                   <span>Explore</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 border">
                        column 2
                    </div>
                </div>
            </div>
        );
    }
}

export default JoinUs;