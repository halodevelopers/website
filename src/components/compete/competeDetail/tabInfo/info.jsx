import React, { Component } from 'react';
import DescriptionDetail from './description';
import Evaluation from './evaluation';
import Prize from './prize';
import Timeline from './timeline';
import Rules from './rules'
import styles from './css/info.module.css';
import clsx from 'clsx';

class Info extends Component {
  state = {}
  render() {
    return (
      <div className="row">
        <nav className="col">
          <ul className={clsx(styles.ul_links)}>
            <li><a className={clsx(styles.a_links)} href="#">Description</a></li>
            <li><a className={clsx(styles.a_links)} href="#evaluation">Evaluation</a></li>
            <li><a className={clsx(styles.a_links)} href="#prize">Prize</a></li>
            <li><a className={clsx(styles.a_links)} href="#timeline">Timeline</a></li>
            <li><a className={clsx(styles.a_links)} href="#rules">Rules</a></li>
          </ul>
        </nav>
        <div className="col-10 col-8 col-6 col-4">
          <DescriptionDetail/>
          <Evaluation/>
          <Prize/>
          <Timeline/>
          <Rules/>
        </div>
      </div>
    );
  }
}

export default Info;