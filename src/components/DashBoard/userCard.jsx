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
        <div className={clsx(styles.header)}>
          <div className={clsx(styles.hero)}>
            <div className={clsx(styles.avatar_div)}>
              <img
                src={avatar}
                className={clsx("rounded-circle", styles.avatar)}
                style={{ width: "180px" }}
                alt="..."
                align="center"
              ></img>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt">
          <div className="container-fluid">
            <div className={clsx("mt-5",)}>
              <DashboardTab />
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default UserCard;
