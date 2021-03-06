import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TransitionsModal from './RegisterModal';
import TransitionsModal2 from './loginModel';
import { Link } from 'react-router-dom';
import styles from './css/navbar.module.css';
import clsx from 'clsx';
import AnnouncementBar from './anouncementbar';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <div>
                <AnnouncementBar />
                <div className={clsx("container-fluid sticky-top", styles.navbar)}>

                    <nav className={clsx("navbarlight navbar navbar-expand-lg navbar-light p-2")}>

                        <div className="container-fluid">
                            <Link className={clsx("navbarlink", styles.link)} to="/">
                                <a className={clsx("", styles.navbarbrand)} id='logo' href="/" />
                                <a className={clsx("", styles.navbartext)} id='logo' href="/">Halodevs</a>
                            </Link>
                            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
                            <div className="nav-inner collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className={clsx(styles.link)} to="/compete">
                                            <a className="nav-link" href="#">Compete</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={clsx(styles.link)} to="/learn">
                                            <a className="nav-link" href="#">Learn</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={clsx(styles.link)} to="/community">
                                            <a className="nav-link" href="#">Leaderboard</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={clsx(styles.link)} to="/projects">
                                            <a className="nav-link" href="#">Projects</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={clsx(styles.link)} to="/jobs">
                                            <a className="nav-link">Jobs</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="collapse d-flex justify-content-end" id="navbarNav">
                                <TransitionsModal />
                                <TransitionsModal2 />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        );
    }
}

export default NavBar;