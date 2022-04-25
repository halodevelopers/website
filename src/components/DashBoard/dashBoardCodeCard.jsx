import React from 'react';
import avatar from "./images/avatar.jpg";
import StarIcon from '@material-ui/icons/Star';

function DashBoardCodeCard(props) {
    return (
        <div>
            <div className="container_fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="avatar">
                            <img src={avatar}
                            style ={{width:"80px", borderRadius:'50%'}} alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <h3 style={{fontSize:"16px"}}>{props.name}</h3>
                        <p
                            style={{fontSize:"14px"}}
                        >
                            {props.detail}
                        </p>
                    </div>
                    <div className="col-md-1">
                        <div className="code-rate">
                            <div style={{float:'left'}} className="code-rate-icon">
                                <StarIcon/>
                            </div>
                            <div className="code-rate-num">
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