import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.min.css'
import MediaCard from './cards';

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
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="For Money" {...a11yProps(0)} />
          <Tab label="For Points" {...a11yProps(1)} />
          <Tab label="For Knowledge" {...a11yProps(2)} />
          <Tab label="For Intership" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="container">
          <div className="row">
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="container">
          <div className="row">
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="container">
          <div className="row">
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="container">
          <div className="row">
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
            <div className="col">
              <MediaCard />
            </div>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
