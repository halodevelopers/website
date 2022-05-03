import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import clsx from 'clsx';
import styles from './css/patnership.module.css';

class Patnership extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Row>
                    <div className="d-flex justify-content-left">
                        <button type="button" className={clsx("btn", styles.btn)}>Join Halodevs</button>
                        <button type="button" className={clsx("btn", styles.btn1)}>Become AI Expert</button>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Patnership;