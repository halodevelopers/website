import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DashCompete from './code/DashCompete';
import clsx from "clsx";
import styles from "./css/tabs.module.css";
import DashBoardDataSet from './dataset/dashboardDataset';
import DashBoardCode from './code/dashboardCode';
import DashBoardCalenderHeatMap from './home/dashboardCalenderHeatMap';
import DashBoardProfileBio from './home/dashboardProfileBio';
// import DashBoardConnect from './home/dashboardConnect';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}



export default function DashboardTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={clsx("container-fluid")}>
      <div className={clsx("row", styles.row)}>
        <div className="col-md-12">
          <Tabs
            className={clsx("tabs", styles.tabs)}

            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Competitions" {...a11yProps(1)} />
            <Tab label="Datasets" {...a11yProps(2)} />
            <Tab label="Code" {...a11yProps(3)} />
          </Tabs>


          <TabPanel value={value} index={0}>
            <div className="container-fluid">
              {/* <DashboardCard /> */}
              <DashBoardProfileBio />
    
              <DashBoardCalenderHeatMap />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div>
              <DashCompete />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <DashBoardDataSet />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <DashBoardCode />
          </TabPanel>
        </div>
      </div>
    </div>

  );
}
