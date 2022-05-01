import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './css/joinus.module.css';
import clsx from 'clsx';

class JoinUs extends Component {
    state = {}
    render() {
        return (
            <div className={clsx("container-fluid", styles.container)}>
                <Row className={clsx("container", styles.innercontainer)}>
                    <div className={clsx("col-md-6", styles.joinus)}>
                        <div className={clsx("Jumbotron", styles.Jumbotron)}>
                            <div className={clsx("text-left", styles.title)}>
                                <h1>Join our community of bright minds</h1>
                            </div>
                            <p>
                                There are more than 30 000 people in our community from novices to experts. Get noticed by companies through participating in competitions.

                            </p>
                            <div className="d-flex justify-content-left">
                                <button type="button" className={clsx("btn", styles.btn)}>Join Halodevs</button>
                                <button type="button" className={clsx("btn", styles.btn1)}>Become AI Expert</button>
                            </div>
                        </div>
                    </div>
                    <div className={clsx("col-md-6", )}>
                        <div className={clsx("Jumbotron", styles.innercontainer)}>

                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}

export default JoinUs;