import React from 'react';
import SimpleCodeTab from './dashboardCodeTab';
import DashBoardSearch from './DashBoardSearch';

function DashBoardCode() {
    return ( 
        <div>
            <DashBoardSearch/>
            <SimpleCodeTab/>
        </div>
     );
}

export default DashBoardCode;