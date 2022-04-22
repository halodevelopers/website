import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './css/login.module.css';
import clsx from 'clsx';

class SigninForm extends Component {
  state = {}
  render() {
    return (
      <div>
        <h2 className="text-center mb-2">Create an account</h2>
        <form>

          <div className="form-outline mb-2">
            <input type="text" id="form3Example1cg" className="form-control form-control-md" placeholder='Your Name'/>
          </div>

          <div className="form-outline mb-2">
            <input type="email" id="form3Example3cg" className="form-control form-control-md" placeholder='Your Email'/>
          </div>

          <div className="form-outline mb-2">
            <input type="password" id="form3Example4cg" className="form-control form-control-md" placeholder='Password'/>
          </div>

          <div className="form-outline mb-2">
            <input type="password" id="form3Example4cdg" className="form-control form-control-md" placeholder='Repeat your password'/>
          </div>

          <div className="form-check d-flex justify-content-center mb-2">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example3cg"
            />
            <label className="form-check-label" for="form2Example3g">
              I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
            </label>
          </div>

          <div className="d-flex justify-content-center">
            <button type="button" className={clsx("btn",  styles.btn)}>Register</button>
          </div>

          <p className="text-center text-muted mt-2 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>

        </form>
      </div>
    );
  }
}

export default SigninForm;