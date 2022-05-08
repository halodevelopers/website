import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './css/newsLette.module.css';
import clsx from 'clsx';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default function NewsLetter() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={("container", styles.container)}>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className={clsx("text-start", styles.newsLetter)}>
                            <strong className="font-weight-bold">Subscribe to our newsletter</strong>
                            <p className="text-muted">Get the latest news, articles and resources delivered right to your inbox.</p>

                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                        <div className={clsx("text-end", styles.buttonInside)}>

                            <form className="form-inline">
                                <input type="text" className=" mr-2" placeholder="name@example.com" />
                                <button type="submit" className={clsx("btn ", styles.button)}>Sign Up <ArrowRightIcon /> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}