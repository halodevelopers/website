import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class LoginForm extends Component {
  state = {}
  render() {
    return (
      <div>
        <h2 className="text-uppercase text-center mb-5">Login</h2>
        <form>
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
            <label className="form-label" for="form3Example3cg">Your Email</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
            <label className="form-label" for="form3Example4cg">Password</label>
          </div>
          <div className="form-check d-flex justify-content-center mb-5">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example3cg"
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
          </div>

          <p className="text-center text-muted mt-5 mb-0">Don't Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>

        </form>
      </div>
    );
  }
}

export default LoginForm;