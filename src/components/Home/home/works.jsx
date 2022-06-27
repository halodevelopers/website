import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import clsx from 'clsx';
import styles from './css/work.module.css'

const Pride = () => {
    return (
      <div className={clsx("container", styles.container)}>
        <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
          <div className="col-md-12 grid-x c-brag__component">
            <div className="small-12 medium-12 cell c-brag__component__label">For over</div>
            <div className={clsx("small-12 medium-12 cell c-brag__component__number", styles.one)}>10</div>
            <div className="small-12 medium-12 cell c-brag__component__counter">editions</div>
          </div>
        </div>
        <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
          <div className="grid-x c-brag__component">
            <div className="small-12 medium-12 cell c-brag__component__label">more than</div>
            <div className={clsx("small-12 medium-12 cell c-brag__component__number", styles.two)}>405</div>
            <div className="small-12 medium-12 cell c-brag__component__counter">students</div>
          </div>
        </div>
        <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
          <div className="grid-x c-brag__component">
            <div className="small-12 medium-12 cell c-brag__component__label">built</div>
            <div className={clsx("small-12 medium-12 cell c-brag__component__number", styles.three)}>102</div>
            <div className="small-12 medium-12 cell c-brag__component__counter">projects</div>
          </div>
        </div>
        <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
          <div className="grid-x c-brag__component">
            <div className="small-12 medium-12 cell c-brag__component__label">with</div>
            <div className={clsx("small-12 medium-12 cell c-brag__component__number", styles.four)}>139</div>
            <div className="small-12 medium-12 cell c-brag__component__counter">partners</div>
          </div>
        </div>
        <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
          <div className="grid-x c-brag__component">
            <div className="small-12 medium-12 cell c-brag__component__label">and</div>
            <div className={clsx("small-12 medium-12 cell c-brag__component__number", styles.five)}>54</div>
            <div className="small-12 medium-12 cell c-brag__component__counter">universities</div>
          </div>
        </div>
        <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
          <div className="grid-x c-brag__component">
            <div className="small-12 medium-12 cell c-brag__component__label">coached by</div>
            <div className={clsx("small-12 medium-12 cell c-brag__component__number", styles.six)}>89</div>
            <div className="small-12 medium-12 cell c-brag__component__counter">experts</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Pride;