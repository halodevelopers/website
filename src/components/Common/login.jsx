import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/login.module.css';
import clsx from 'clsx';


function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData
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
      <h2 className="text-center mb-2">Login</h2>
      <form onSubmit={onSubmit}>

        <div className="form-outline mb-2">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            className="form-control form-control-md"
            placeholder='Email' />
        </div>

        <div className="form-outline mb-2">
          <input
            type="password"
            id="password"
            name="Password"
            value={password}
            onChange={onChange}
            className="form-control form-control-md"
            placeholder='password' />
        </div>


        <div className="d-flex justify-content-center">
          <button
            type="submit"

            className={clsx("btn", styles.btn)}>Login</button>
        </div>

        <p className={clsx("text-center text-muted mt-2 mb-0 ")}>Don't Have already an account? <a href="#!" className="fw-bold text-body"><u>Create One</u></a></p>

      </form>
    </div>
  );
}

export default LoginForm;