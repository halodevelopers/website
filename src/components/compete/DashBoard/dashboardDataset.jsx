import React, { Component } from 'react';
import DashBoardDataSetCard from './dashboardDatasetCard';
import SimpleTabs from './dashboardDSTab';

class DashBoardDataSet extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <DashBoardDataSetCard/>
                <SimpleTabs/>
            </div>
        );
    }
}
 
export default DashBoardDataSet;