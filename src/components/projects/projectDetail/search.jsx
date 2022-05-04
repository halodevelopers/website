import React, { Fragment } from 'react';

function ProjectSearch(props) {
    return ( 
        <Fragment>
            <div className="row" style={{margin:"auto"}}>
                <div className="col-5">
                    <input type="text" placeholder="I'm Looking For ..." className="form-control" />
                </div>
                <div className="col">
                    <button className="btn btn-dark">SEARCH</button>
                </div>
                <div className="col">
                    <a href="#" className="btn btn-outline-dark">{props.name} Project</a>
                </div>
            </div>
        </Fragment>
     );
}

export default ProjectSearch;