import React, { Component } from 'react';
import DashBoardDataSetSearch from './DashBoardSearch';
import clsx from 'clsx';
import styles from './css/dashboardDataset.module.css';


class DashBoardDataSetCard extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className={clsx(styles.datasetBorder)}>
                    <div className="text-center container-fluid">
                        <div>
                            <h6>A data scientist with no data? No such thing!</h6>
                        </div>
                        <div>
                            <p>
                                Publish any dataset on Kaggle’s public data platform, and your collection will grow here.
                                Find other data enthusiasts with shared interests to discuss and collaborate for work or play.
                            </p>
                        </div>
                        <div>
                            <button className="btn btn-outline-dark">Dataset</button>
                        </div>
                    </div>
                </div>
                <div>
                    <DashBoardDataSetSearch />
                </div>
            </div>
        );
    }
}

export default DashBoardDataSetCard;