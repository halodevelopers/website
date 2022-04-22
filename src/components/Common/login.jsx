import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/login.module.css';
import clsx from 'clsx';

class LoginForm extends Component {
  state = {}
  render() {
    return (
      <div>
        <h2 className="text-center mb-2">Login</h2>
        <form>
          <div className="form-outline mb-2">
            <input type="email" id="form3Example3cg" className="form-control form-control-md" placeholder='Email'/>
          </div>

          <div className="form-outline mb-2">
            <input type="password" id="form3Example4cg" className="form-control form-control-md" placeholder='Password'/>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className={clsx("btn",  styles.btn)} >Register</button>
          </div>

          <p className={clsx("text-center text-muted mt-2 mb-0 ")}>Don't Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>

        </form>
      </div>
    );
  }
}

export default LoginForm;