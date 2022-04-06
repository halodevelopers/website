import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TransitionsModal from './signinModel';
import TransitionsModal2 from './loginModel';
import { Link } from 'react-router-dom';
import styles from './css/navbar.module.css';
import clsx from 'clsx';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <div className={clsx("container-fluid", styles.navbar)}>
                <nav className="navbar navbar-expand-lg navbar-light p-2">
                    <div className="container-fluid">
                    <Link to="/">
                        <a className="navbar-brand d-flex justify-content-start" id='logo' href="#">HaloDev</a>
                    </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="nav-inner collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className={clsx(styles.link)} to="/compete">
                                        <a className="nav-link"  href="#">Comptete</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Learn</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Community</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Jobs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse d-flex justify-content-end"  id="navbarNav">
                            <TransitionsModal />
                            <TransitionsModal2 />
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;