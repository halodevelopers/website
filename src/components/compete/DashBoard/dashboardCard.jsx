import { Typography } from '@material-ui/core';
import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness7Icon from '@material-ui/icons/Brightness7';



function DashboardCard() {
    return (
        <Typography>
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <div className="col">
                            DashBoard
                        </div>
                        <div className="col">
                            <CodeIcon />
                        </div>
                    </div>
                    <div className="row">
                        <h6>Unranked</h6>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="row">
                                <div className="col" style={{ flex: 1 }}>
                                    <BrightnessLowIcon />
                                    <p>0</p>
                                    <Brightness6Icon />
                                    <p>0</p>
                                    <Brightness7Icon />
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Typography>
    );
}

export default DashboardCard;