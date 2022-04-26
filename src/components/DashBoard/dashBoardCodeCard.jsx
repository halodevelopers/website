import React from 'react';
import avatar from "./images/avatar.jpg";
import StarIcon from '@material-ui/icons/Star';
import clsx from "clsx";
import styles from "./css/dashboardCode.module.css";

function DashBoardCodeCard(props) {
    return (
        <div>
            <div className={clsx("container_fluid", styles.codeCard)}>
                <div className="row">
                    <div className="col-md-2">
                        <div className="avatar">
                            <img src={avatar}
                            className = {clsx(styles.avatarCode)}
                            alt="" />
                        </div>
                    </div>
                    <div className="col-8">
                        <h3 className = {clsx(styles.codeCardTitle)}>{props.name}</h3>
                        <p className = {clsx(styles.codeCardBody)}>
                            {props.detail}
                        </p>
                    </div>
                    <div className="col-md-1">
                        <div className= {clsx(styles.codeRate)}>
                            <div className= {clsx(styles.codeIcon)}>
                                <StarIcon/>
                            </div>
                            <div style={{paddingLeft:"10px"}} className={clsx(styles.codeNum)}>
                                11
                            </div>
                        </div>
                        <div className="draft">
                            <p>Draft ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoardCodeCard;