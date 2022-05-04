
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './css/herolink.module.css';
import clsx from 'clsx';

const HeroLink = ({ href, name }) => {
    return (
      <div className={clsx("small-12 medium-4 large-4 cell", styles.herolink)}>
        <h2 className={clsx("h3", styles.h3)}>
          <Link to={href}>
            <a>{name}</a>
          </Link>
        </h2>
      </div>
    );
  };

HeroLink.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default HeroLink;