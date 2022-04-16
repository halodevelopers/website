import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './css/dashboardDataset.module.css';
import clsx from 'clsx';
import SimpleTabs from './dashboardDSTab';


class DashBoardDataSetSearch extends Component {
    state = {}

    render() {
        return (
            <div>
                <form action="" method="post">
                    <div>

                        <input className = {clsx(styles.inputstyle)} type="text" placeholder='Search DataSet' required />
                        <SearchIcon/>
                        <button className='btn btn-light'>Filter</button>
                    </div>
                    <div>
                        <SimpleTabs/>
                    </div>
                </form>
            </div>
        );
    }
}

export default DashBoardDataSetSearch;