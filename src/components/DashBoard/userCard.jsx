import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "./images/avatar.jpg";
import clsx from "clsx";
import styles from "./css/dashborad.module.css";
import pen from "./css/pen.png";


class UserCard extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className={clsx("mt-5")}>
          <div className={clsx(styles.header)}>
            <div className={clsx(styles.hero)}>
              <div className={clsx(styles.cover_edit)}>
                <img
                  className={clsx(styles.cover_pen)}
                  src={pen}
                  alt="" />
              </div>
              <div className="row">
                <div className={clsx(styles.avatar_div, 'col')}>
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
          </div>
        </div>
        {/* Profile details */}
        <div className={clsx(styles.profile_container)}>
          <div className={clsx(styles.profile_details, 'row mt-5')}>
            {/* <div className="col-3"></div> */}
            <div className="profile_detail col">
              <h5 className="fs-5">TIMOTHY ATWANZIRE</h5>
              <div className="qualification fs-4">
                <p className="fs-6">Developer and Data scientist at Mbarara University of Science & Technology</p>
                <div className="location">
                  <p className={clsx(styles.location, 'fs-6')}>Kasese, Isingiro, Uganda</p>
                </div>
              </div>
            </div>
            <div className="education col">
              <p>Mbarara University of Science & Technology</p>
            </div>
            <div className="col-auto">
              <img
                className={clsx(styles.cover_pen)}
                src={pen}
                alt="" />
            </div>
          </div>
        </div>
      </Fragment>

    );
  }
}

export default UserCard;
