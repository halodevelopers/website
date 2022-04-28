import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import styles from './css/discussion.module.css';
import DiscussionTab from './discussionTab';

function Discussions() {
    return (
        <div>
            <div className="row mx-0">
                <h2>Discussion</h2>
                <div className="col-3 px-0">
                    <button className={clsx("btn btn-md", styles.btn_discussion)}>Discusion</button>
                </div>
                <div className={clsx('col-sm-auto px-0', styles.search_icon)}>
                    <SearchIcon />
                </div>
                <div className={clsx('col-md-5 px-0', styles.search_input)}>
                    <input type="text" className={clsx('form-control', styles.form_input)} placeholder='Search Discussion...' />
                </div>
            </div>
            <div style={{marginTop:'20px'}}>
                <DiscussionTab />
            </div>
        </div>
    );
}

export default Discussions;