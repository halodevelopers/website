import {
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  Card,
  CardContent,
} from "@material-ui/core";
import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import clsx from "clsx";
import styles from "./css/homecards.module.css";

function DashboardCard() {
  return (
    <div className="container">
      <div className="row">
        <div className={clsx("col-4", styles.container)}>
          <div className={clsx(styles.cardheader)}>
            <Typography
              variant="body2"
              className={clsx(styles.card__title)}
              color="text.secondary"
            >
              Competitions Novice
            </Typography>
            <Avatar src="logo/novice@192.png" aria-label=""></Avatar>
          </div>
          <div className={clsx(styles.rank)}>Unrankend</div>

          <div className={clsx(styles.ratings)}>
            <div className={clsx(styles.ratings__icons)}>
              <img src="logo/gold.png" alt="" height={25} />
              <Typography variant="subtitle2" color="initial">
                0
              </Typography>
            </div>

            <div className={clsx(styles.ratings__icons)}>
              <img src="logo/bronze.png" alt="" height={25} />
              <Typography variant="subtitle2" color="initial">
                0
              </Typography>
            </div>

            <div className={clsx(styles.ratings__icons)}>
              <img src="logo/silver.png" alt="" height={25} />

              <Typography variant="subtitle2" color="initial">
                0
              </Typography>
            </div>
          </div>
          <div className={clsx(styles.card__bottom)}>
            <Typography
              variant="body2"
              className={clsx(styles.card__title_bottom)}
              color="text.secondary"
            >
              No completed competitions
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
