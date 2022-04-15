import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "./images/avatar.jpg";
import clsx from "clsx";
import styles from "./css/dashborad.module.css";
import DashboardTab from "./dashboardTab";
class UserCard extends Component {
  state = {};
  render() {
    return (
      <div className={clsx("container mt-5")}>
        <div className={clsx("row")}>
          <div className={clsx("container", styles.container)}>
          <div className={clsx("row")}>
          <div className={clsx("col-2")}>
            <img
              src={avatar}
              style={{ width: "200px" }}
              class="img-thumbnail rounded float-start"
              alt="..."
            ></img>
          </div>
          <div className="col-6">
            <h4>Atwanzire Timothy Ian</h4>
            <p>Data Scientist</p>
            <p>HaloDev</p>
            <p>Uganda</p>
          </div>
          <div className="col-4">
            <img src="logo/novice@192.png" alt="" />
          </div>
        </div>
          </div>
          </div>
        <div className={clsx("row", styles.tabs)}>
          <DashboardTab />
        </div>
      </div>
    );
  }
}

export default UserCard;
