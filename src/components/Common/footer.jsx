import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './css/footer.module.css';
import clsx from 'clsx';

class Footer extends Component {
  state = {}
  render() {
    return (
      <div>
        <div className="d-flex flex-column">
          <div className="bg-white">
            <div className={clsx("container py-5", styles.container)}>
              <div className="row py-4">
                <div className={clsx("col-lg-4 col-md-6 mb-4 mb-lg-0", styles.container)}>
                  <h1 className={('font-italic text-muted halodevs')}>Halodevs</h1>
                  <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  <ul className="list-inline mt-4">
                    <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                  <h6 className="text-uppercase font-weight-bold mb-4">Comptete</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a href="#" className="text-muted">For Money</a></li>
                    <li className="mb-2"><a href="#" className="text-muted">For Knowledge</a></li>
                    <li className="mb-2"><a href="#" className="text-muted">For InterShip</a></li>
                    <li className="mb-2"><a href="#" className="text-muted">Our Champion List</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                  <h6 className="text-uppercase font-weight-bold mb-4">HaloDev</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
                    <li className="mb-2"><a href="#" className="text-muted">Register</a></li>
                    <li className="mb-2"><a href="#" className="text-muted">Donate</a></li>
                    <li className="mb-2"><a href="#" className="text-muted">Our Services</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 mb-lg-0">
                  <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                  <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                  <div className="p-1 rounded border">
                    <div className="input-group">
                      <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"></input>
                      <div className="input-group-append">
                        <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light py-4">
              <div className="container text-center">
                <p className="text-muted mb-0 py-2">© 2022 HaloDev All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Footer;
