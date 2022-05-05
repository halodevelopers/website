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
      <div className={clsx("container-fluid mt-5")}>
        <div className={clsx("row")}>
          <div className={clsx("container-fluid")}>
            <div className={clsx("row",)}>
              <div className="container">
                <div className={clsx("row", styles.row)}>
                  <div className={clsx("col-2")}>
                    <img
                      src={avatar}
                      className={clsx("row", styles.avatar)}
                      alt="..."
                    ></img>
                  </div>
                  <div className="col-6">
                    <h4>Atwanzire Timothy Ian</h4>
                    <ul style={{ listStyleType: 'none' }}>
                      <li>Data Scientist</li>
                      <li>HaloDev</li>
                      <li>Uganda</li></ul>
                  </div>
                  <div className="col-4">
                    <img src="logo/novice@192.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><hr />
        <div className="row">
          <div className="container-fluid">
            <div className={clsx("row",)}>
              <DashboardTab />
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default UserCard;
