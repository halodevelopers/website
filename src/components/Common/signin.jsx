import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './css/login.module.css';
import clsx from 'clsx';

function SigninForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const { username, email, password, password2 } = formData
  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div>
      <h2 className="text-center mb-2">Create an account</h2>
      <form onSubmit={onSubmit}>

        <div className="form-outline mb-2">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            // onChange={e => setFormData({ ...formData, username: e.target.value })}
            onChange={onChange}
            className="form-control form-control-md"
            placeholder='choose a username' />
        </div>

        <div className="form-outline mb-2">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            className="form-control form-control-md"
            placeholder='your ymail' />
        </div>

        <div className="form-outline mb-2">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            className="form-control form-control-md"
            placeholder='password' />
        </div>

        <div className="form-outline mb-2">
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            onChange={onChange}
            className="form-control 
          form-control-md"
            placeholder='confirm your password' />
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
          <button
            type="submit"

            className={clsx("btn", styles.btn)}>Register</button>
        </div>

        <p className="text-center text-muted mt-2 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>

      </form>
    </div>
  );
}

export default SigninForm;