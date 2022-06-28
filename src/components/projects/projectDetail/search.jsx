import React, { Fragment } from 'react';

function ProjectSearch(props) {
    return ( 
        <Fragment>
            <div className="row" style={{margin:"auto"}}>
                <div className="col-auto">
                    <input type="text" placeholder="I'm Looking For ..." className="form-control" />
                </div>
                <div className="col-auto m-1">
                    <button className="btn btn-sm btn-xs btn-dark">SEARCH</button>
                </div>
                <div className="col-auto m-1">
                    <a href="#" className="btn btn-sm btn-xs btn-outline-dark">{props.name} Project</a>
                </div>
            </div>
        </Fragment>
     );
}

export default ProjectSearch;