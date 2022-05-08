import React, {Fragment} from 'react';
import { CardContent, Card } from '@mui/material';

function DashBoardConnect() {
    return ( 
        <Fragment>
            <Card sx={{minWidth:275}}>
            <CardContent>
                <h1>Hello World</h1>
            </CardContent>
            </Card>
        </Fragment>
     );
}

export default DashBoardConnect;