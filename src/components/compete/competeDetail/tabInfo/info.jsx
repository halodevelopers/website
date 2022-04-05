import React, { Component } from 'react';
import DescriptionDetail from './description';
import Evaluation from './evaluation';
import Prize from './prize';
import Timeline from './timeline';
import Rules from './rules'

class Info extends Component {
  state = {}
  render() {
    return (
      <div className="row">
        <nav className="col">
          <ul>
            <li><a href="#">Description</a></li>
            <li><a href="#evaluation">Evaluation</a></li>
            <li><a href="#prize">Prize</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#rules">Rules</a></li>
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