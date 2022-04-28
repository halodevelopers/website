import { Typography } from '@material-ui/core';
import React from 'react';
import About from './about';

function Data() {
    return (
        <Typography>
            <div className="row">
                <div className="col">
                    <div>
                        <a href=""> <botton className="btn">About</botton> </a>
                    </div>
                    <div>
                        <a href=""> <botton className="btn">File</botton> </a>
                    </div>
                </div>
                <div className="col-10 col-8 col-6 col-4 container">
                    <About/>
                </div>
            </div>
        </Typography>
    );
}

export default Data;