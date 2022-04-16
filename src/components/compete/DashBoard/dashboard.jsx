import React, { Component } from "react";
import NavBar from "../../Common/navigation";
import UserCard from "./userCard";
// import DashboardTab from "./dashboardTab";
import clsx from "clsx";
import styles from "./css/dashboard.module.css";
class DashBoard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <UserCard />
            </div>
          </div>
          <div className={clsx("row", styles.row)}>
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
