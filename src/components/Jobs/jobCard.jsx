import React, { Fragment } from 'react';

function JobCard() {
    return (
        <Fragment>
            <div className="row m-3">
                <div className="col-3">
                    <div className="img">
                        <img style={{width:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJe2MysKx72TrhYTapdf5UMqir9J9Y80bFthEXH_VxE_dx4eZCK8yXod292y71zGNmNvo&usqp=CAU" alt="" />
                    </div>
                </div>
                <div className="col-8">
                <div className="title">
                        <h5>Hulamin - Senior Data Scientist</h5>
                    </div>
                    <div className="requirements">
                        <p className="d-inline badge m-2" style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>Data Engineering</p>
                        <p className="d-inline badge m-2" style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>AI infrastructure</p>
                        <p className="d-inline badge m-2" style={{ backgroundColor: "#c8c8e6", color: "#0B0B45" }}>Business/Data Analysis</p>
                    </div>
                    <div className="location">
                        <p>Pietermaritzburg, South Africa· <span> 15 days ago</span> </p>
                    </div>
                </div>
            </div>
            <hr style={{width:"100%"}}/>
        </Fragment>
    );
}

export default JobCard;