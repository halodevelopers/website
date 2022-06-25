import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/form.module.css';
import clsx from 'clsx';

class ContactForm extends Component {
  state = {}
  render() {
    return (
      <div>
        <h4 className="text-center mb-2">Contact HaloDev</h4>
        <form>
          <div className="form-outline mb-2">
            <input type="email" id="form3Example3cg" className="form-control form-control-md" placeholder='Email'/>
          </div>

          <div className="form-outline mb-2">
            <input type="text" id="form3Example4cg" className="form-control form-control-md" placeholder='Subject'/>
          </div>
          <div className="form-outline mb-2">
           <textarea name="body" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className={clsx("btn",  styles.btn)} >SEND</button>
          </div>

          <p className={clsx("text-center text-muted mt-2 mb-0 ")}>Don't Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>

        </form>
      </div>
    );
  }
}

export default ContactForm;