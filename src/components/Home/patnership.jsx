import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import clsx from 'clsx';
import styles from './css/patnership.module.css';


// raect images
import { ReactComponent as Partner1 } from './partners/agentschap-binnenlands-bestuur-logo.svg';
import { ReactComponent as Partner2 } from './partners/agentschap-digitaal-vlaanderen-logo.svg';
import { ReactComponent as Partner3 } from './partners/agentschap-mobiliteit-openbare-werken-logo.svg';
import { ReactComponent as Partner4 } from './partners/agentschap-wegen-verkeer-logo.svg';
import { ReactComponent as Partner5 } from './partners/artevelde-logo.svg';
import { ReactComponent as Partner6 } from './partners/arvesta-logo.svg';
// import { ReactComponent as Partner7 } from './partners/belnet-logo.svg';
// import { ReactComponent as Partner8 } from './partners/deloitte-logo.svg';
import { ReactComponent as Partner9 } from './partners/hogent-logo.svg';
import { ReactComponent as Partner10 } from './partners/kdg-logo.svg';
// import { ReactComponent as Partner11} from './partners/kodeklub-logo.svg';
import { ReactComponent as Partner12 } from './partners/okbe-logo.svg';
import { ReactComponent as Partner13 } from './partners/openrecognitionalliance-logo.svg';
// import { ReactComponent as Partner14} from './partners/osmbe-logo.svg';
// import { ReactComponent as Partner15} from './partners/vliz-logo.svg';

class Patnership extends Component {
    state = {}
    render() {
        return (
            <div className={clsx("container-fluid", styles.main)}>
                <div className={clsx("container-fluid", styles.container)}>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="col-md-12 grid-x c-brag__component">
                            <Partner1 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner12 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner3 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner13 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner5 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner10 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                </div>

                {/* SECOND */}
                <div className={clsx("container-fluid", styles.container)}>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="col-md-12 grid-x c-brag__component">
                            <Partner12 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner6 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner12 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner9 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner13 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner10 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                </div>
                {/* Third */}
                <div className={clsx("container-fluid", styles.container)}>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="col-md-12 grid-x c-brag__component">
                            <Partner10 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner9 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner10 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner4 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner10 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner6 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                </div>
                {/* Fouth */}
                <div className={clsx("container-fluid", styles.container)}>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="col-md-12 grid-x c-brag__component">
                            <Partner9 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner2 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner3 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner12 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner13 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner9 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                </div>
                {/* fith */}


                <div className={clsx("container-fluid", styles.container)}>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="col-md-12 grid-x c-brag__component">
                            <Partner6 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner2 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner9 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner5 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner3 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                    <div className={clsx("row small-6 medium-4 large-auto cell", styles.row)}>
                        <div className="grid-x c-brag__component">
                            <Partner12 className={clsx("one", styles.one)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Patnership;